import { Hotel } from "../types/types";
import hotelsData from "../data/hotels.json";

export function getAllHotelsData(): Hotel[] {
  return hotelsData as Hotel[];
}