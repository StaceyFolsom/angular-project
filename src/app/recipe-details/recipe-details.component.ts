import { Component, Input, OnInit } from '@angular/core';
import { SearchCriteriaComponent } from '../search-criteria/search-criteria.component';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
  providers: [SearchCriteriaComponent, RecipeService]
})
export class RecipeDetailsComponent implements OnInit {
 @Input() public recipe: Recipe[];


  constructor(public SearchCriteria: SearchCriteriaComponent) {
  }

  ngOnInit() {}

}
