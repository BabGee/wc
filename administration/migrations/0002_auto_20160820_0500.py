# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-08-20 05:00
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('gui', '0007_remove_permission_access_level'),
        ('processor', '0002_remove_servicecommand_access_level'),
        ('administration', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='accesslevel',
            name='status',
        ),
        migrations.DeleteModel(
            name='Channel',
        ),
        migrations.DeleteModel(
            name='AccessLevel',
        ),
        migrations.DeleteModel(
            name='AccessLevelStatus',
        ),
    ]
