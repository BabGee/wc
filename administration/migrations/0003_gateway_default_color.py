# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-11-10 19:20
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administration', '0002_auto_20160820_0500'),
    ]

    operations = [
        migrations.AddField(
            model_name='gateway',
            name='default_color',
            field=models.CharField(default=b'#4183E5', max_length=10),
        ),
    ]