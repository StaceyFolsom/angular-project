import { Component, Directive, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
  providers: []
})
export class SearchCriteriaComponent implements OnInit {
  public selectedRecipe: Recipe;
  public recipe: Recipe;
  public favorites: Recipe[];
  public selection: Recipe[];

  searchTerm: string = "";


  constructor(public recipeService: RecipeService) {}

  //   selectRecipe(recipe: Recipe) : void {
  //     console.log(recipe);
  //     this.selectedRecipe = recipe;
  // }

  // // Kim
  // addFavorite(recipe: Recipe) : void {
  //   console.log(recipe);
  //   recipe.bookmarked = true;
  //   this.recipeService.favorites.push(recipe);
  //   console.log(this.recipeService.favorites);
  // }

  // removeFavorite(recipe: Recipe) : void {
  //   console.log(recipe);
  //   recipe.bookmarked = false;
  //   let remove = this.recipeService.favorites.indexOf(recipe);
  //   this.recipeService.favorites.splice(remove, 1);
  //   console.log(this.recipeService.favorites);
  // }
  // Kim

  ngOnInit(): void {} 
}
