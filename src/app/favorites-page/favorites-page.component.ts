import { Component, Input, OnInit } from '@angular/core';  // Kim - added Input
import { RecipeService } from '../recipe.service';  // Kim


// Kim
interface Recipe {
  label: string;
  image: string;
  source: string;
  bookmarked: boolean; // Kim - used for favorites
  url: string;
  yield: number;
  calories: number;
};
// Kim

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css'],
  providers: [RecipeService]  // Kim
})

export class FavoritesPageComponent implements OnInit {
  @Input() recipe: Recipe; // Kim

  constructor( public recipeService: RecipeService) {}  // Kim

  ngOnInit(): void {

  }

}
