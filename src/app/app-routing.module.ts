import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';

const routes: Routes = [
  // //blank path is the default or home//
       { path: '', component: RecipeDetailsComponent },
       { path: 'RecipeDetails', component: RecipeDetailsComponent },
       { path: 'RecipeList', component: RecipeListComponent },
       { path: 'SearchCriteria', component: SearchCriteriaComponent },

      //  redirects 
       { path: 'RecipeDetails:', redirectTo: '/RecipeDetail', pathMatch: 'full' },
       { path: 'RecipeList:', redirectTo: '/RecipeLists', pathMatch: 'full' },
       { path: 'SearchCriteria:', redirectTo: '/SearchCriterias', pathMatch: 'full' },
       { path: 'Favorite:', redirectTo: '/Favorites', pathMatch: 'full' },
    //** wildcard -catch all bad routes and redirect them to the not found page */
    //{ path: '**', component: PageNotFoundComponent }
    ]

    @NgModule({
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    })
    export class AppRoutingModule { }
    





//     @NgModule({
//     imports: [
//     RouterModule.forRoot(
//     appRoutes,
//     )
//     // other imports here
//     // ],
//     // ...
//     // })


// // ];

// // @NgModule({
// //   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// import { SunriseComponent } from './sunrise/sunrise.component';
// import { SunsetComponent } from './sunset/sunset.component';


// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'sunrise', component: SunriseComponent },
//   { path: 'sunset', component: SunsetComponent },
//   //redirects
//   { path: 'sunrise', redirectTo: '/sunrises', pathMatch: 'full' },
//   { path: 'sunset', redirectTo: '/sunsets', pathMatch: 'full' },
//   //** = wildcard - catch all bad routes and redirect them to the not found page
//   { path: '**', component: PagenotfoundComponent } //order matters
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



