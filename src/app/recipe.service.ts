import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Recipe {
  label: string;
  image: string;
  source: string;
  bookmarked: boolean; // Kim - using for favorites
  url: string;
  yield: number;
  calories: number;
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  apiKey = "481ff5b72289ea4b80c372ff0248e618";
  appID = "780ebef6";
  url = "https://api.edamam.com/search";
  recipes: Recipe[] = [];
  favorites: Recipe[] = []; // Kim

  // filter: string = '';

  constructor(private http: HttpClient) {}


  getNutFree() { 
    const nutFreeRecipes = this.getUrlWithAPIKey() + "&health=tree-nut-free";
    // "&q=" + "&health=tree-nut-free";
    this.http.get(nutFreeRecipes).subscribe(
      (response: any) => {
        // this.recipes = response.hits;
        console.log(response)
      },
      (error) => {
        console.error(error);
      }
    );
  }

    // const excludedItems = this.getUrlWithAPIKey() + "health=gluten-free&health=dairy-free&health=tree-nut-free";

  //   this.http.get(excludedItems).subscribe(
  //     (response: any) => {
  // };
  // for (const recipe of response.hits) {
  //   if (recipe.label === "gluten-free", "dairy-free", "tree-nut-free";)
  //   {
  //     recipe.push()
  //     //push to a new nut free array and display that
  //   };

  getRecipes(searchTerm) {
    const requestURL = this.getUrlWithAPIKey() + "&q=" + searchTerm; // add whatever params you want from https://developer.edamam.com/edamam-docs-recipe-api
  console.log("Searching for:", searchTerm); // STACEY won't be needed in the long run

    this.http.get(requestURL).subscribe(
      (response: any) => {
        this.recipes = response.hits;
        console.log(this.recipes); // STACEY won't be needed in the long run

      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUrlWithAPIKey() { // DON'T CHANGE ME
    return `${this.url}?app_id=${this.appID}&app_key=${this.apiKey}`;
  }

  ngOnInit() {}

}
