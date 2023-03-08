from django.urls import path
from .views import main_view,game_detail_view,search_results

urlpatterns ={
    path('',main_view,name='main'),
    path('search/',search_results,name='search')
}