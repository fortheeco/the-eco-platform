# Generated by Django 4.2.3 on 2023-11-21 10:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0007_problem_idea'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='problem',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='problem_ideas', to='accounts.problem'),
        ),
    ]
