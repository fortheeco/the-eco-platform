from django import forms
from .models import Problem

class EditProblemForm(forms.ModelForm):
    class Meta:
        model = Problem
        fields = ['category', 'description', 'location', 'goal', 'img_one', 'img_two', 'img_three']
