# Generated by Django 4.0.3 on 2022-03-30 13:53

import base.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_packages_image_packages_price_packages_seats_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='packages',
            name='image',
            field=models.ImageField(upload_to=base.models.upload_to, verbose_name='image'),
        ),
    ]
