import { Hotel } from "@/types/types";
import { getAllHotelsData, sortByRating } from "./hotels-utils";

export const hotels: Hotel[] = getAllHotelsData();
export const hotelsByRating: Hotel[] = sortByRating(hotels);