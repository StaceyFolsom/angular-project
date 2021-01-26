import { Component, OnInit } from '@angular/core';
// import { RecipeListComponent } from '../recipe-list/recipe-list.component';

// interface detailedRecipe { 
//   label: string;
//   image: string;
//   source: string;
//   url: string;
//   yield: number;
//   calories: number;
// };

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
  // providers: [RecipeListComponent]
})
export class RecipeDetailsComponent implements OnInit {
  

  constructor() {
  // constructor(public recipeList: RecipeListComponent) {
  }

  ngOnInit() {}

}
