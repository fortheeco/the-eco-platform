from .models import Problem, Project

def problem_count_processor(request):
    problem_count = Problem.objects.count()
    return {'problem_count': problem_count}


def project_count_processor(request):
    project_count = Project.objects.count()
    return {'project_count': project_count}