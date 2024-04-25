from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import logout
from django.shortcuts import render, get_object_or_404, redirect
from django.views.decorators.csrf import csrf_exempt

from .forms import EditProblemForm
import uuid
from django.core.mail import send_mail
from django.urls import reverse
from django.contrib.sites.shortcuts import get_current_site
from .models import *
from django.contrib import messages

from io import BytesIO
from django.contrib.auth import authenticate,login, logout
import json
from django.contrib.auth.decorators import login_required
from .decorators import *
from django.contrib.auth.models import Group
from datetime import datetime
from django.conf import settings
from .helper import rows
from django.db.models import Q
# Create your views here.

# this view expects a payload of full name,gender,email and password from the request object
# since the registration form doesnt include a username field, we generate a random username from their full name
# with the uuid library
def User_Registration(request):
    if request.user.is_authenticated:
        return redirect('profile')
    if request.method=="POST":
        uname=request.POST['full_name'] + str(uuid.uuid4())
        # i think i need to remove the space character from the username :)
        user=User.objects.create(
            email=request.POST['email'],
            username=uname,
        )
        user.set_password(request.POST['password'])
        # user.is_active=False
        # we can't log the user in from here if user.is_active is False
        user.save()
        user_group=Group.objects.get(name='user')
        user.groups.add(user_group)
        login(request,user)
        user_profile=UserProfile.objects.create(
            gender=request.POST['gender'],
            user=user,
            full_name=request.POST['full_name'],
            email=user.email
        )
        user_profile.save()
         # Generate a verification token
        verification_token = str(uuid.uuid4())
        user_profile.verification_token = verification_token
        user_profile.save()
        return redirect('update')
    return render(request,'form.html')

# user account activation via email
def User_Activation(request, token):
    try:
        user_profile = UserProfile.objects.get(verification_token=token)
    except UserProfile.DoesNotExist:
        messages.error(request, 'Invalid activation link.')
        return redirect('login')  # Redirect to your login page or any other appropriate page thinking of using HTTP404 page

    user_profile.user.is_active = True
    user_profile.user.save()
    user_profile.verification_token = ''
    user_profile.save()

    messages.success(request, 'Your account has been activated. You can now log in.')
    return redirect('login')  # Redirect to your login page or any other appropriate page

# update the user account profile by adding the profile image and location
@login_required(login_url='login')
@user_only
def Update_User_Profile(request):
    if request.user.is_authenticated==False:
        return redirect('login')
    elif request.method=="POST" and request.user.is_authenticated:
        user=request.user
        
        user.user_profile.location=request.POST['location']
        user.user_profile.bio=request.POST['bio']
        if request.FILES.get('image')  !=None:
            user.user_profile.profile_image=request.FILES['image']
        user.user_profile.save()
        messages.success(request,'Profile Details added')
        return JsonResponse({"status":"details added"},safe=False)

    # this should navigate to the skill addition page
    return render(request,'individual-details.html')

# this request view will successfully log the user in to the application if they have completed each
# stage for the registration process which are email activation, avatar and location upload, skill additions
# specific redirects will happen when the user logs in to complete the required steps
def Login(request):
    if request.method=="POST":
        request_user=User.objects.filter(email=request.POST['email']).first()
        if request_user is None:
            messages.error(request,'No account found')
        else:
            auth_user=authenticate(username=request_user.username,password=request.POST['password'])
            if auth_user is None:
                messages.error(request,"Invalid Credentails")
            elif auth_user is not None:
                messages.success(request,"Login Successful")
                login(request,auth_user)
                if auth_user.groups.all()[0].name=='user':
                    return redirect('profile')
                elif auth_user.groups.all()[0].name=='organisation':
                    return redirect('org-profile')
    # i'll add the message validation
    return render(request,'form.html')

@login_required(login_url='login')
@user_only
def AddSkills(request):
    if request.method=="POST":
        skills_dict=json.loads(request.body)
        # avoid repeated skills sent by the user
        skill_arr=list(set(skills_dict["skills"]))
        for skill in skill_arr:
            if Skills.objects.filter(name=skill).exists():
                request.user.user_profile.skillsets.add(Skills.objects.get(name=skill))
                request.user.user_profile.save()
            else:
                new_skill=Skills.objects.create(
                    name=skill
                )
                new_skill.save()
                request.user.user_profile.skillsets.add(new_skill)
                request.user.user_profile.save()
                messages.success(request,"Skill Added")
        return redirect('profile')
    return render(request,'individual-details.html')

def Logout(request):
    if request.user.is_authenticated:
        logout(request)
        messages.success(request, "Logout successful")
    else:
        messages.error(request, "You are not logged in")

    return redirect('login')



@login_required(login_url='login')
def User_Profile(request, **kwargs):
    user = request.user
    user_profile = UserProfile.objects.filter(user=user).first()

    if user_profile is None or user_profile.profile_image == '':
        messages.error(request, "Update your profile")
        return redirect('update')

    # Get problems associated with the user
    user_problems = Problem.objects.filter(user=user)

    context = {
        'user_profile': user_profile,
        'user_problems': user_problems,  # Add user problems to the context
    }

    return render(request, 'profile.html', context)


@login_required(login_url='login')
@organization_only
def Update_Organisation_Profile(request):
    if request.user.is_authenticated==False:
        return redirect('login')
    elif request.method=="POST" and request.user.is_authenticated:
        user=request.user
        user.org_profile.location=request.POST['location']
        user.org_profile.branch_office=request.POST['branch_office']
        user.org_profile.instagram=request.POST['instagram']
        user.org_profile.twitter=request.POST['twitter']
        user.org_profile.reg_number=request.POST['regNumber']
        user.org_profile.linkedin=request.POST['linkedin']
        if request.FILES:
            user.org_profile.image=request.FILES['image']
        user.org_profile.save()
        messages.success(request,'Details added')

        return render(request,'org-detail.html')
        # return redirect('profile')

    return render(request,'org-detail.html')

@login_required(login_url="login")
@organization_only
def Organisation_Profile(request):
    org_profile=request.user.org_profile
    context={
        "company_name":org_profile.name,
        "image_url":org_profile.image.url,
        "email":org_profile.email
    }
    return render(request,'org-profile.html',context)


def Organisation_Registration(request):
    if request.user.is_authenticated:
        return redirect('org_profile')
    if request.method=="POST":
        com_name=request.POST['firstName']
        uname=request.POST['firstName'] + str(uuid.uuid4())


        user=User.objects.create(
            username = uname,
            email=request.POST['Email']
            # company_type= request.POST['company-type'],
        )
        user.set_password(request.POST['Password'])
        # user.is_active=False
        # we can't log the user in from here if user.is_active is False
        user.save()
        org_group=Group.objects.get(name="organisation")
        user.groups.add(org_group)
        login(request,user)
        organisation_profile=OrganisationProfile.objects.create(
            email=request.POST['Email'],
            user=request.user,
            name=com_name,
            company_type= request.POST['company-type']
        )
        organisation_profile.save()
         # Generate a verification token
        verification_token = str(uuid.uuid4())
        organisation_profile.verification_token = verification_token
        organisation_profile.save()
        return redirect('org-update')
    return render(request,'organization.html')

@login_required(login_url="login")
def Edit_Profile(request):
    if request.method=='POST':
        if request.FILES:
            request.user.user_profile.profile_image=request.FILES["image"]

        # we need to update the username field as it is tied to the user's fullname
        request.user.email=request.POST["email"]
        request.user.user_profile.email=request.user.email
        request.user.user_profile.full_name=request.POST["full_name"]
        request.user.user_profile.phone=request.POST["phone"]
        request.user.user_profile.location=request.POST["location"]
        request.user.save()
        request.user.user_profile.save()
        messages.success(request,'Edit Profile Details added')
        return render(request,'edit-profile.html')

    return render(request,'edit-profile.html')

def innovation(request):
    return render(request, 'innovation.html')

def UpdateUserSkills(request):
    current_skills=request.user.user_profile.skillsets.all()
    skill_arr=[skill.name for skill in current_skills]

    context={
        "user_skills":skill_arr
    }

    return render(request,'update-skill.html',context)

def DeleteSkill(request):
    # dont feel like using a post request here
    # i'll just grab the data from query parameter
    skill=request.GET['skill']
    # grab all the skills from the user profile
    user_skills=request.user.user_profile.skillsets
    # remove the selected skill
    user_skills.remove(Skills.objects.get(name=skill))
    # save and update the relationship models
    request.user.user_profile.save()
    messages.success(request,"Skill Removed")
    # redirect to edit profile page, basically a reload
    return redirect('edit-skills')



@login_required(login_url="login")
def Problems(request):

    problems=Problem.objects.all().order_by('-created_at')

    if 'search' in request.GET:
        problems=Problem.objects.filter(Q(description__icontains=request.GET['search']) )
        if len(problems)==0:
            messages.error(request,"No Results")
            problems=Problem.objects.all().order_by('-created_at')
        else:
            messages.success(request,"Search Results")

    if request.method=='POST':
        # dictionary for text input
        _dict=request.POST
        # media or files dictionary for image input
        _files=request.FILES
        Problem.objects.create(
            user=request.user,
            location=_dict['location'],
            category=Category.objects.get(name=_dict['category']),
            description=_dict['description'],
            goal=Goal.objects.get(goal_no=int(_dict['goal'])),
            img_one=_files['img0'],
            img_two=_files['img1'],
            img_three=_files['img2'],
        )
        messages.success(request,"Problem Echoed")
        return JsonResponse({"mode":"success"},safe=False)
    return render(request, "problems.html",{"problems":problems,})

@csrf_exempt
def edit_problem(request, problem_id):
    problem = get_object_or_404(Problem, id=problem_id)

    if request.method == 'POST':
        problem.location = request.POST.get('location')
        problem.category = Category.objects.get(name=request.POST.get('category'))
        problem.description = request.POST.get('description')
        problem.goal = Goal.objects.get(goal_no=int(request.POST.get('goal')))
        problem.save()
        messages.success(request, "Problem Updated")
        return JsonResponse({"mode": "success"}, safe=False)
    return render(request, 'problems.html', {'problem': problem,'edit':True})


def like_problem(request):
    id=int(request.GET['id'])
    problem=Problem.objects.get(id=id)
    likes_queryset=problem.liked_by.all()
    dislike_queryset=problem.disliked_by.all()
    user=request.user
    if user in dislike_queryset:
        problem.disliked_by.remove(user)
        problem.liked_by.add(user)
        problem.save()
    elif user in likes_queryset:
        pass
    elif not user in likes_queryset:
        problem.liked_by.add(user)
        problem.save()
    else:
        pass
    likes_count=len(problem.liked_by.all())
    dislikes_count=len(problem.disliked_by.all())
    # Basically the dislike is just an inversion of what ive just done, i go leave the idea first because
    # i need to go house now
    return JsonResponse({"status":"success","likes":likes_count,"dislikes":dislikes_count},safe=False)

    # if request.method == 'POST':
    #     problem_id = request.POST.get('problem_id')
    #     # we need to parse the problem_id to an integer, it comes as a string
    #     problem = Problem.objects.get(id=problem_id)
    #     user = request.user
    #     # we actually de reason the same way boss hahahahahah
    #     if user in problem.liked_by.all():
    #         # no need to remove the user again na or make we de undo the like action?
    #         # we suppose get toggle action on the frontend to de like and unlike
    #         # but for now if the user don ready like the post, let's do nothing
    #         problem.liked_by.remove(user)
    #     else:
    #         problem.liked_by.add(user)

    #     # Update the likes count using the number of users who liked the problem
    #     likes_count = problem.liked_by.count()
    #     # this place is redundant boss, there is no longer a likes or dislikes attribute in the model class
    #     # this place will return none sef, it's causing 500 error on the request
    #     # problem.likes = likes_count

    #     print(likes_count)
    #     problem.save()

    #     return JsonResponse({"mode": "success", "likes": likes_count})

def dislike_problem(request):
    id=int(request.GET['id'])
    problem=Problem.objects.get(id=id)
    likes_queryset=problem.liked_by.all()
    dislike_queryset=problem.disliked_by.all()
    user=request.user
    if user in likes_queryset:
        problem.liked_by.remove(user)
        problem.disliked_by.add(user)
        problem.save()
    elif user in dislike_queryset:
        pass
    elif not user in dislike_queryset:
        problem.disliked_by.add(user)
        problem.save()
    else:
        pass
    likes_count=len(problem.liked_by.all())
    dislikes_count=len(problem.disliked_by.all())
    # Basically the dislike is just an inversion of what ive just done, i go leave the idea first because
    # i need to go house now
    return JsonResponse({"status":"success","likes":likes_count,"dislikes":dislikes_count},safe=False)
    # if request.method == 'POST':
    #     problem_id = request.POST.get('problem_id')
    #     problem = Problem.objects.get(id=problem_id)
    #     user = request.user

    #     if user in problem.disliked_by.all():
    #         problem.disliked_by.remove(user)
    #     else:
    #         problem.disliked_by.add(user)

    #     # Update the dislikes count using the number of users who disliked the problem
    #     dislikes_count = problem.disliked_by.count()
    #     problem.dislikes = dislikes_count
    #     problem.save()

        # return JsonResponse({"mode": "success", "dislikes": dislikes_count})
@login_required(login_url='login')
def Projects(request):
    projects=Project.objects.all()
    if 'search' in request.GET:
        projects=Project.objects.filter(Q(description__icontains=request.GET['search']) )
        if len(projects)==0:
            messages.error(request,"No Results")
            projects=Project.objects.all()
        else:
            messages.success(request,"Search Results")
    return render(request, "projects.html",{"projects":projects})


@login_required(login_url="login")
def AddProjects(request):
    if request.method=="POST":
        data=request.POST
        skill_arr=request.POST['skills'].split(',')
        new_project=Project.objects.create(
            title=data['title'],
            description=data['description'],
            location=data['location'],
            user=request.user,
            usnd_goals=Goal.objects.get(goal_no=int(data['goal'])),
            no_of_people=int(data['people']),
            payment_type=data['payment-type'],
            duration=data['duration'],
            category=Category.objects.get(name=data['eco-cat']),
            start_date=datetime.strptime(str(data['date'] + " 00:00:00"),'%Y-%m-%d %H:%M:%S'),
            amount=data['amount_per_person']
        )
        for skill in skill_arr:
            if Skills.objects.filter(name=skill).exists():
                new_project.required_skills.add(Skills.objects.get(name=skill.lower()))
                new_project.save()
            else:
                new_skill=Skills.objects.create(
                    name=skill
                )
                new_skill.save()
                new_project.required_skills.add(new_skill)
                new_project.save()
        messages.success(request,"Project added successfully")
        return JsonResponse({"status":"success"},safe=False)
    return render(request, "add-project.html")

@login_required(login_url='login')
def ProblemDetails(request, pk):
    problem = Problem.objects.get(id=pk)
    comments = Comment.objects.filter(problem=problem).order_by('-created_at')

    # Handle problem like and dislike
    # handle comment like and dislike

    if request.method == "POST":
        _data = request.POST
        Comment.objects.create(
            user=request.user,
            text=_data['idea'],
            problem=problem
        )
        messages.success(request, "Idea Added")
        # Redirect back to the problem-details page
        return redirect('problem-details', pk=int(pk))

    # Handling likes and dislikes
    if request.method == "GET" and 'action' in request.GET:
        action = request.GET['action']
        user = request.user

        if action == 'like':
            handle_like(request, user, problem)
        elif action == 'dislike':
            handle_dislike(request, user, problem)

        # Get updated like and dislike counts
        likes_count = problem.liked_by.count()
        dislikes_count = problem.disliked_by.count()

        return JsonResponse({"likes": likes_count, "dislikes": dislikes_count}, safe=False)

    return render(request, 'problem-details.html', {'problem': problem, 'comments': comments})

# Sharp :)))
# if you ask me sha, the different urls can all share the same view
def handle_like(request, user, problem):
    dislikes_queryset = problem.disliked_by.all()

    if user in dislikes_queryset:
        problem.disliked_by.remove(user)
        problem.liked_by.add(user)
        problem.save()
    elif user not in problem.liked_by.all():
        problem.liked_by.add(user)
        problem.save()


def handle_dislike(request, user, problem):
    likes_queryset = problem.liked_by.all()

    if user in likes_queryset:
        problem.liked_by.remove(user)
        problem.disliked_by.add(user)
        problem.save()
    elif user not in problem.disliked_by.all():
        problem.disliked_by.add(user)
        problem.save()


@login_required(login_url="login")
def ProjectDetails(request,pk):
    projects=Project.objects.all()
    if 'search' in request.GET:
        projects=Project.objects.filter(Q(description__icontains=request.GET['search']) )
        if len(projects)==0:
            messages.error(request,"No Results")
            projects=Project.objects.all()
        else:
            messages.success(request,"Search Results")
    project=Project.objects.filter(id=pk).first()
    return render(request,'project-details.html',{"projects":projects,"project":project})


# Helper Function to automatically create the goal rows, when the need arises
# Remove comment from function and routes path in urls.py to use
# !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
# USE THIS FUNCTION WITH CAUTION AND STABLE INTERNET, TO AVOID DUPLICATE ROWS
# rows is imported from the helper.py file, take a look :)
# def AddRowsHelper(request):
#     for row in rows:
#         # Goal.objects.create(
#         #     goal_no=row['number'],
#         #     name=row['name'],
#         #     category=Category.objects.filter(name=row['category'])[0]
#         # )
#         print(len(rows))
#     return JsonResponse({'status':"success"},safe=False)

def get_problem_count(request):
    problem_count = Problem.objects.count()
    return JsonResponse({'problem_count': problem_count})

def get_project_count(request):
    project_count = Project.objects.count()
    return JsonResponse({'project_count': project_count})

def home(request):

    return render(request,'index.html')

def UpVote(request):
    pass

def DownVote(request):
    pass
