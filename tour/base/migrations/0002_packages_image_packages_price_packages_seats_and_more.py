# Generated by Django 4.0.3 on 2022-03-30 07:59

import base.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='packages',
            name='image',
            field=models.ImageField(default='posts/default.jpg', upload_to=base.models.upload_to, verbose_name='image'),
        ),
        migrations.AddField(
            model_name='packages',
            name='price',
            field=models.IntegerField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='packages',
            name='seats',
            field=models.IntegerField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='packages',
            name='id',
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
