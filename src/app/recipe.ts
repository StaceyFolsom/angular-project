export interface Recipe {
  label: string;
  image: string;
  source: string;
  bookmarked: boolean; // Kim - used for favorites
  url: string;
  yield: number;
  calories: number;
}
