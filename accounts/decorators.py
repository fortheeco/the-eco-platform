from django.shortcuts import redirect
from django.http import HttpResponseNotAllowed
from django.contrib import messages


# User Roles
# 1. User
# 2. Organisation Roles

# Restriction for user activities
def user_only(view):
    def wrapper(request,*args,**kwargs):
        if request.user.groups.all()[0].name =="user":
            return view(request,*args,**kwargs)
        else:
            return HttpResponseNotAllowed("Action not allowed")
    return wrapper

# Restriction for organisation activities
def organization_only(view):
    def wrapper(request,*args,**kwargs):
        if request.user.groups.all()[0].name =="organisation":
            return view(request,*args,**kwargs)
        else:
            return HttpResponseNotAllowed("Action not allowed")
    return wrapper

# will be used to check if user has updated profile before accessing the dashboard
def profile_details_required(view):
    def wrapper(request,*args,**kwargs):
        if request.user.user_profile.location is None:
            messages.error(request,'Update your details')
            return redirect('update')
        return view(request,*args,**kwargs)
    return wrapper

# Redundant code
# def profile_context(view):
#     def wrapper(request,*args,**kwargs):
#         context={}
#         if request.user.groups.all()[0]=="user":
#             context["org_profile"]=None
#             context["user_profile"]=request.user.user_profile
#             return view(request,context=context)
#         elif request.user.groups.all()[0]=="organisation":
#             context["org_profile"]=request.user.org_profile
#             context["user_profile"]=None


