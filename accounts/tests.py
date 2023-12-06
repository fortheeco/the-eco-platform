from django.test import TestCase
from django.contrib.auth.models import User
from .models import UserProfile, OrganisationProfile, Skills

class RegistrationTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='testpassword')
        self.skill1 = Skills.objects.create(name='Skill 1')
        self.skill2 = Skills.objects.create(name='Skill 2')

    def test_normal_user_registration(self):
        # Registering as a normal user with skills
        skills = [self.skill1, self.skill2]
        user_profile = UserProfile.objects.create(
            user=self.user,
            full_name='Test User',
            gender='Male',
            location='Test Location',
            completed=True
        )
        user_profile.skillsets.set(skills)
        user_profile.save()

        # Verify the skills are saved correctly
        saved_skills = user_profile.skillsets.all()
        self.assertEqual(saved_skills.count(), 2)
        self.assertIn(self.skill1, saved_skills)
        self.assertIn(self.skill2, saved_skills)

    def test_organization_registration(self):
        # Registering as an organization
        org_profile = OrganisationProfile.objects.create(
            user=self.user,
            name='Test Organization',
            company_type='Manufacturing',
            location='Test Location',
            completed=True
        )
        org_profile.save()

        # No need for skill-related code

        # Verify that the organization profile is saved correctly
        self.assertEqual(org_profile.user, self.user)
        self.assertEqual(org_profile.name, 'Test Organization')
        self.assertEqual(org_profile.company_type, 'Manufacturing')
        self.assertEqual(org_profile.location, 'Test Location')
        self.assertEqual(org_profile.completed, True)
