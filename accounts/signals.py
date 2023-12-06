# # signals.py
# from django.db.models.signals import post_save
# from django.dispatch import receiver
# from django.core.mail import send_mail
# from django.contrib.sites.models import Site
# from django.urls import reverse
# from .models import UserProfile

# @receiver(post_save, sender=UserProfile)
# def send_verification_email(sender, instance, created, **kwargs):
#     if created:
#         current_site = Site.objects.get_current()
#         verification_url = reverse('user_activation', kwargs={'token': instance.verification_token})
#         activation_link = f"http://{current_site.domain}{verification_url}"

#         subject = 'Activate your account'
#         message = f'Hello {instance.full_name},\n\nPlease click the link below to activate your account:\n{activation_link}'
#         from_email = 'Ecodataism@gmail.com'
#         recipient_list = [instance.user.email]

#         send_mail(subject, message, from_email, recipient_list)
