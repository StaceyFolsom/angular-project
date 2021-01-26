import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface shortRecipe {
  label: string;
  image: string;
  source: string;
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  apiKey = "481ff5b72289ea4b80c372ff0248e618";
  appID = "780ebef6";
  url = "https://api.edamam.com/search";
  recipes: shortRecipe[] = [];

  constructor(private http: HttpClient) {}



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

}
