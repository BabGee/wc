# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2017-10-31 09:00
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administration', '0003_gateway_default_color'),
        ('processor', '0002_remove_servicecommand_access_level'),
    ]

    operations = [
        migrations.AddField(
            model_name='servicecommand',
            name='gateway',
            field=models.ManyToManyField(blank=True, to='administration.Gateway'),
        ),
    ]