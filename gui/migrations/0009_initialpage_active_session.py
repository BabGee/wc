# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-05-31 11:22
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gui', '0008_auto_20170531_1101'),
    ]

    operations = [
        migrations.AddField(
            model_name='initialpage',
            name='active_session',
            field=models.BooleanField(default=False),
        ),
    ]