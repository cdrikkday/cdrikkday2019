from django.contrib import admin
from .models import Data
from import_export.admin import ImportExportModelAdmin
#admin.site.register(Data)

# Register your models here.

@admin.register(Data)
class DataAdmin(ImportExportModelAdmin):
    list_display = ('no', 'qty', 'prod_desc', 'order_crtdate', 'price_total', 'rs', 'is_3d')