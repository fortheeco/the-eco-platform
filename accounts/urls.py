from django.urls import path,include
from .views import *

# (
#     User_Registration,
#     User_Activation,
#     AddSkills,
#     Update_User_Profile,
#     User_Profile,
#     Login,
#     Logout,
# )

urlpatterns = [
    path('register/',User_Registration,name='reg'),
    path('activate/<str:token>/', User_Activation, name='user_activation'),
    path('update-profile',Update_User_Profile,name='update'),
    path('update-skills/',UpdateUserSkills,name='edit-skills'),
    path('delete-skill',DeleteSkill,name='delete-skill'),
    path('logout',Logout, name='logout'),
    path('update-profile/skill',AddSkills,name='update-skill'),
    path('login',Login,name='login'),
    path('user/profile',User_Profile, name='profile'),
    path('organisation/register/',Organisation_Registration,name='org_reg'),
    path('organisation/profile',Organisation_Profile,name="org-profile"),
    path('update-org-profile',Update_Organisation_Profile,name='org-update'),
    path('innovation',innovation,name='innovation'),
    path('edit-profile',Edit_Profile,name='edit'),
    path('logout',Logout,name='logout'),
    path('user/problems', Problems, name="problems"),
    path('user/projects', Projects, name="projects"),
    path('user/add-projects', AddProjects, name="add-projects"),
    path('user/problem-details/<int:pk>',ProblemDetails,name='problem-details'),
    path('user/projects-details/<int:pk>',ProjectDetails,name='project-details')




]
