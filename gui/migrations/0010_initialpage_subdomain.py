# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-11-04 06:07
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gui', '0009_initialpage_active_session'),
    ]

    operations = [
        migrations.AddField(
            model_name='initialpage',
            name='subdomain',
            field=models.BooleanField(default=False),
        ),
    ]
