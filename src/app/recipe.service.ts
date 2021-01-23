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

  getRecipes() {
    const requestURL = this.getUrlWithAPIKey() + "&q=tacos"; // add whatever params you want from https://developer.edamam.com/edamam-docs-recipe-api
  
    this.http.get(requestURL).subscribe(
      (response: any) => {
        this.recipes = response.hits;
      
        // STACEY BELOW
        for (let key in response) {
          if (Object.prototype.hasOwnProperty.call(response, key)) {
            const shortRecipe = response[key];
            this.recipes.push(shortRecipe);}
          }console.log(this.recipes);
        // let recipes = response.hits.children;
        
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getUrlWithAPIKey() {
    return `${this.url}?app_id=${this.appID}&app_key=${this.apiKey}`;
  }

}
