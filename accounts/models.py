from django.db import models
from django.contrib.auth.models import User
import uuid
from django.utils import timezone




# Category tuple for project and problem model classes
# both models will be using this tuple as choice field
# to carry out table row object creations

Categories=(
    ("COMMUNITY","Community"),
    ("ORGANISATION","Organisation"),
    ("ENVIRONMENT","Environment")
)

PaymentType=(
    ("FIXED","Fixed"),
    ("VOLUNTEERING","Volunteering"),
    ("BIDDING","Bidding")
)

class Skills(models.Model):
    name = models.CharField(max_length=500)

    def __str__(self):
        return self.name # this function was missing self parameter, so i corrected it


class UserProfile(models.Model):
    gender_choice = (
        ("Male", "Male"),
        ("Female", "Female"),
        ("Custom", "Custom"),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="user_profile")
    full_name = models.CharField(max_length=500)
    email = models.EmailField(max_length=500, null = True)
    gender = models.CharField(choices=gender_choice, max_length=50)
    profile_image = models.ImageField(null=True, blank=True, upload_to="profiles/")
    location = models.CharField(null=True, blank=True, max_length=1000)
    skillsets = models.ManyToManyField(Skills, blank=True)
    phone=models.CharField(default="",blank=True,null=True,max_length=300)
    bio=models.TextField(null=True,blank=True,default='')
    verification_token = models.UUIDField(default=uuid.uuid4, editable=False)


    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.full_name  # this function was missing self parameter, so i corrected it



class OrganisationProfile(models.Model):
    _type = (
        ("Manufacturing", "Manufacturing"),
        ("Telecom", "Telecom"),
        ("Agriculture", "Agriculture"),
        ("Fashion", "Fashion"),
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name="org_profile")
    name = models.CharField(max_length=500)
    email = models.EmailField(max_length=500, null = True)
    company_type = models.CharField(choices=_type, max_length=200)
    location = models.CharField(blank=True, null=True, max_length=1000)
    image = models.ImageField(upload_to='profiles')
    branch_office = models.CharField(blank=True, null=True, max_length=1000)
    completed = models.BooleanField(default=False)
    instagram = models.CharField(default="", blank=True, max_length=300)
    twitter = models.CharField(default="", blank=True, max_length=300)
    linkedin = models.CharField(default="", blank=True, max_length=300)
    reg_number=models.CharField(default="",blank=True,null=True,max_length=300)

    def __str__(self):
        return self.name



class Category(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

class Goal(models.Model):
    goal_no=models.PositiveIntegerField(blank=True,null=True)
    name = models.CharField(max_length=50)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
# This function uses a decorator to match user automatically to their profile page based on their acc type (User or Org)
# from neon, please why write this here, i commented it
# def Access_Profile(request):
#     pass


# Side Note:
# Since we may have multiple images for a problem,
# we may set a strict amount of image upload to like 3 or 4
# Or
# we create a an image table with a many to one relationship with the problem table
# for now i suggest we go with the first solution with a max upload of 3 images and add them as columns fields
class Problem(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,related_name='user_problems',null=True,blank=True)
    description=models.TextField(null=True,blank=True)
    created_at=models.DateTimeField(auto_now_add=True)
    category=models.ForeignKey(Category,blank=True,null=True,on_delete=models.CASCADE)
    img_one=models.ImageField(upload_to='problem/image',null=True,blank=True)
    img_two=models.ImageField(upload_to='problem/image',null=True,blank=True)
    img_three=models.ImageField(upload_to='problem/image',null=True,blank=True)
    location=models.CharField(max_length=100,null=True,blank=True)
    goal=models.ForeignKey(Goal,blank=True,on_delete=models.CASCADE,null=True)
    idea=models.PositiveIntegerField(default=0)
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)
    shares = models.PositiveIntegerField(default=0)
    def __str__(self):
        return self.user.user_profile.full_name + ' problems'


class Comment(models.Model):
    text = models.TextField()
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    problem = models.ForeignKey(Problem, on_delete=models.CASCADE,related_name='problem_ideas')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    def __str__(self):
        return self.user.user_profile.full_name

class Reply(models.Model):
    text = models.TextField()
    likes = models.PositiveIntegerField(default=0)
    dislikes = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    comment = models.ForeignKey(Comment, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        # please returning self.user causes object type, You are returning a user instance instead of a string
        # return self.user
        return f'{self.user.user_profile.full_name}'

class Project(models.Model):
    title = models.CharField(max_length=250)
    description = models.TextField(null=True)
    location = models.CharField(max_length=250)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_projects')
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True, default=None)
    usnd_goals = models.ForeignKey(Goal, on_delete=models.CASCADE, null=True, default=None)
    no_of_people = models.IntegerField()
    required_skills = models.ManyToManyField(Skills,blank=True)
    duration = models.CharField(max_length=50,null=True,blank=True)
    start_date = models.DateTimeField()
    publish = models.DateTimeField(default=timezone.now)
    payment_type = models.CharField(max_length=20, choices=PaymentType, blank=True)
    amount = models.CharField(max_length=50)

    class Meta:
        ordering = ['-publish']

    def __str__(self):
        return self.title
