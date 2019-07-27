from django.db import models

# Create your models here.
class Post(models.Model):
    Post = models.CharField(max_length=1000, null=True)
    Year = models.ForeignKey('SchoolYear', on_delete=models.SET_NULL, null=True)

    YES = 'yes'
    NO = 'no'
    UNSURE = 'unsure'

    #have reported, will report, unsure, won't report change this later
    REPORT_CHOICES = [
        (YES, 'Yes'),
        (NO, 'No'),
        (UNSURE, 'Unsure')
    ]

    Officially_Reported = models.CharField(
    max_length=6,
    choices= REPORT_CHOICES,
    default = None,
    )

    #type of assault

    #location it happened

    #add email if you'd like to be added to a listserve to get more information on future events from duke sexual assault project

    #adding a photo

    


class SchoolYear(models.Model):
    StartYear = models.IntegerField()
    EndYear = models.IntegerField()
