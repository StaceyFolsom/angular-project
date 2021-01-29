import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';  // Kim
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';

const routes: Routes = [
  // //blank path is the default or home//
       { path: '', component: RecipeDetailsComponent },
       { path: 'details', component: RecipeDetailsComponent },
      //  { path: 'RecipeList', component: RecipeListComponent },
       { path: 'search', component: SearchCriteriaComponent },
       { path: 'favorites', component: FavoritesPageComponent}, // Kim
      //  redirects 
      //  { path: 'RecipeDetails', redirectTo: '/detail', pathMatch: 'full' },
      //  { path: 'RecipeList', redirectTo: '/recipe', pathMatch: 'full' },
      //  { path: 'SearchCriteria', redirectTo: '/search', pathMatch: 'full' },
      //  { path: 'FavoritesPage', redirectTo: '/favorites', pathMatch: 'full' }
    //** wildcard -catch all bad routes and redirect them to the not found page */
    // { path: '**', component: PageNotFoundComponent }
    ];

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })

    export class AppRoutingModule { }
