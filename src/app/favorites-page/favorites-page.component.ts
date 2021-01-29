import { Component, Input, OnInit } from '@angular/core';  // Kim - added Input
import { RecipeService } from '../recipe.service';  // Kim
import { Recipe } from '../recipe';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
  providers: [RecipeService]  // Kim
})

export class FavoritesPageComponent implements OnInit {
  // @Input() public recipe: Recipe[]; // Kim
  public recipe: Recipe;

  constructor( public recipeService: RecipeService) {}  // Kim

  ngOnInit(): void {

  }

}
