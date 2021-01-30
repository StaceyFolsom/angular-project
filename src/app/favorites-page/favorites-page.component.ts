import { Component, Input, OnInit } from '@angular/core';  // Kim - added Input
import { RecipeService } from '../recipe.service';  // Kim
import { Recipe } from '../recipe';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
  providers: []
})

export class FavoritesPageComponent extends SearchCriteriaComponent {
  @Input() public recipe: Recipe;
  @Input() public selectedRecipe: Recipe;
  @Input() public favorites: [];

  constructor(public recipeService: RecipeService) {
    super(recipeService);
  }

    selectRecipe(recipe: Recipe) : void {
      console.log(recipe);
      this.selectedRecipe = recipe;
    }

  removeFavorite(recipe: Recipe) : void {
    console.log(recipe);
    recipe.bookmarked = false;
    let remove = this.recipeService.favorites.indexOf(recipe);
    this.recipeService.favorites.splice(remove, 1);
    console.log(this.recipeService.favorites);
  }

  ngOnInit(): void {

  }

}
