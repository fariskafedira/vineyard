# Generated by Django 4.2.5 on 2023-09-13 02:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='price',
            new_name='amount',
        ),
        migrations.RemoveField(
            model_name='product',
            name='date_added',
        ),
    ]
