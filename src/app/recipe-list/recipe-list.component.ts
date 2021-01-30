import { Component, Input, OnInit } from '@angular/core';
import { SearchCriteriaComponent} from '../search-criteria/search-criteria.component';
import { RecipeService } from '../recipe.service'; // STACEY
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: []
})
export class RecipeListComponent extends SearchCriteriaComponent {
  @Input() public recipe: Recipe;
  @Input() public selectedRecipe: Recipe;
  @Input() public favorites: [];
  @Input() public selection: [];

  constructor(public recipeService: RecipeService) {
    super(recipeService);
  }

  selectRecipe(recipe: Recipe) : void {
    console.log(recipe);
    recipe.selected = true;
    this.recipeService.selection.push(recipe);
    this.selectedRecipe = recipe;
}

    // selectRecipe(recipe: Recipe) : void {
    //   console.log(recipe);
    //   this.selectedRecipe = recipe;
  // }

// Kim
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
