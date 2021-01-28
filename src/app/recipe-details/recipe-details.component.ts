import { Component, Input, OnInit } from '@angular/core';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
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
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
  providers: [SearchCriteriaComponent, RecipeService]
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;


  constructor(public SearchCriteria: SearchCriteriaComponent) {
  }

  ngOnInit() {}

}
