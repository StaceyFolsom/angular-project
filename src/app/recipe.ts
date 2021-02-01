export interface Recipe {
  label: string;
  image: string;
  source: string;
  bookmarked: boolean; // Kim - used for favorites
  selected: boolean;
  url: string;
  yield: number;
  calories: number;
  ingredients: string[];
}
