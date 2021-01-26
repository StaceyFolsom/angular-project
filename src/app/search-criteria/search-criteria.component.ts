import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search-criteria',
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css'],
  providers: [RecipeService]
})
export class SearchCriteriaComponent implements OnInit {
  searchTerm: string = "";
  // url: string = "";
  
  constructor(public recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  // searchRecipes() {

    // something like this
    // return this.todo.filter((todo) => {
    //   return todo.task.toLowerCase().includes(this.filter.toLowerCase());
    // })
  // }

}
