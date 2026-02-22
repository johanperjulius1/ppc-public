import { Hotel } from "../types/types";
import hotelsData from "../data/hotels.json";

export function getAllHotelsData(): Hotel[] {
  return hotelsData as Hotel[];
}

export function sortByRating(hotelsData: Hotel[]): Hotel[] {
  return [...hotelsData].sort((a, b) => b.rating - a.rating);
}