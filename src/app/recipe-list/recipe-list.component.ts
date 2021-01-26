import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service'; // STACEY

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [RecipeService]
})
export class RecipeListComponent implements OnInit {

  constructor( public recipeService: RecipeService) {} // STACEY

  ngOnInit(): void {}

}
