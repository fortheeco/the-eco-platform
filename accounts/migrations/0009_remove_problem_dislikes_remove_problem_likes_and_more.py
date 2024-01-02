# Generated by Django 5.0 on 2024-01-01 22:38

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0008_alter_comment_problem'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.RemoveField(
            model_name='problem',
            name='dislikes',
        ),
        migrations.RemoveField(
            model_name='problem',
            name='likes',
        ),
        migrations.AddField(
            model_name='problem',
            name='disliked_by',
            field=models.ManyToManyField(blank=True, related_name='disliked_problems', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='problem',
            name='liked_by',
            field=models.ManyToManyField(blank=True, related_name='liked_problems', to=settings.AUTH_USER_MODEL),
        ),
    ]
