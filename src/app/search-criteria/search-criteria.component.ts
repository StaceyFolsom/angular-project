import { Component, Directive, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

interface Recipe {
  label: string;
  image: string;
  source: string;
  url: string;
  yield: number;
  calories: number;
};

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
  providers: [RecipeService]
})
export class SearchCriteriaComponent implements OnInit {
  public selectedRecipe: Recipe;
  public recipe: Recipe;

  searchTerm: string = "";

  
  constructor(public recipeService: RecipeService) {}

    selectRecipe(recipe: Recipe) {
      console.log(recipe);
      this.selectedRecipe = recipe;
  }

  ngOnInit(): void {} 
}
