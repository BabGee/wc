# -*- coding: utf-8 -*-
# Generated by Django 1.9.2 on 2016-06-26 15:08
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AccessLevel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45, unique=True)),
                ('description', models.CharField(max_length=100)),
                ('date_modified', models.DateTimeField(auto_now=True)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='AccessLevelStatus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45, unique=True)),
                ('description', models.CharField(max_length=100)),
                ('date_modified', models.DateTimeField(auto_now=True)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Channel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, unique=True)),
                ('description', models.CharField(max_length=200)),
                ('date_modified', models.DateTimeField(auto_now=True)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Gateway',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45, unique=True)),
                ('favicon', models.CharField(blank=True, max_length=200, null=True)),
                ('description', models.CharField(max_length=100)),
                ('date_modified', models.DateTimeField(auto_now=True)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='GatewayHost',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('host', models.CharField(max_length=50, unique=True)),
                ('description', models.CharField(max_length=100)),
                ('date_modified', models.DateTimeField(auto_now=True)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('gateway', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='administration.Gateway')),
            ],
        ),
        migrations.CreateModel(
            name='GatewayHostStatus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=45, unique=True)),
                ('description', models.CharField(max_length=100)),
                ('date_modified', models.DateTimeField(auto_now=True)),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AddField(
            model_name='gatewayhost',
            name='status',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='administration.GatewayHostStatus'),
        ),
        migrations.AddField(
            model_name='accesslevel',
            name='status',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='administration.AccessLevelStatus'),
        ),
    ]
