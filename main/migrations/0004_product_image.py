# Generated by Django 4.2.5 on 2023-10-03 19:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_product_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(default=1, upload_to='item_images/'),
            preserve_default=False,
        ),
    ]
