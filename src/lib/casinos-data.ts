import { getAllPostsData, sortByRating, sortBySmallestBonusTurnover, sortByFreeSpins, sortByFreeSpinsTurnover, sortByNewCasino, sortByHighestBonusAmount, sortByNoBonusTurnover, sortBySwish, sortByBankIdSupport } from "./toplist-utils";
import { Casino } from "@/types/types";

export const casinos: Casino[] = getAllPostsData();
export const casinosByRating: Casino[] = sortByRating(casinos);
export const casinosBySmallestBonusTurnover: Casino[] = sortBySmallestBonusTurnover(casinos);
export const casinosByFreeSpins: Casino[] = sortByFreeSpins(casinos);
export const casinosByFreeSpinsTurnover: Casino[] = sortByFreeSpinsTurnover(casinos);
export const casinosByNewCasino: Casino[] = sortByNewCasino(casinos);
export const casinosByHighestBonusAmount: Casino[] = sortByHighestBonusAmount(casinos);
export const casinosByNoBonusTurnover: Casino[] = sortByNoBonusTurnover(casinos);
export const casinosBySwishSupport: Casino[] = sortBySwish(casinos);
export const casinosByBankIdSupport: Casino[] = sortByBankIdSupport(casinos);

/** Find casino by URL id (e.g. "leovegas" for /casino/leovegas). Uses reviewLink. */
export function getCasinoById(id: string): Casino | null {
  return casinos.find((c) => c.reviewLink === `/casino/${id}`) ?? null;
}