import { Hotel } from "@/types/types";
import { getAllHotelsData, sortByRating } from "./hotels-utils";

export const hotels: Hotel[] = getAllHotelsData();
export const hotelsByRating: Hotel[] = sortByRating(hotels);

/** Find hotel by URL id (e.g. "hotelmalta" for /hotel/hotelmalta). Uses reviewLink. */
export function getHotelById(id: string): Hotel | null {
  return hotels.find((h) => h.reviewLink === `/hotel/${id}`) ?? null;
}