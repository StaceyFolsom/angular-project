import { Component, Input, OnInit } from '@angular/core';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
  providers: []
})
export class RecipeDetailsComponent extends SearchCriteriaComponent {
 @Input() public recipe: Recipe;
 @Input() public selectedRecipe: Recipe;
 @Input() public favorites: [];
 @Input() public selection: Recipe[];


  constructor(public recipeService: RecipeService) {
    super(recipeService);
  }

  clearSelection() : void {
    this.recipeService.selection.pop();
  }

  addFavorite(recipe: Recipe) : void {
    console.log(recipe);
    recipe.bookmarked = true;
    this.recipeService.favorites.push(recipe);
    console.log(this.recipeService.favorites);
  }
  
  removeFavorite(recipe: Recipe) : void {
    console.log(recipe);
    recipe.bookmarked = false;
    let remove = this.recipeService.favorites.indexOf(recipe);
    this.recipeService.favorites.splice(remove, 1);
    console.log(this.recipeService.favorites);
  }

  ngOnInit(): void {}

}
