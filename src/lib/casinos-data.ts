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

const slugToCasinos: Record<string, Casino[]> = {
  "alla-casinon": casinosByRating,
  "nya-casinon": casinosByNewCasino,
  "casino-med-bonus": casinosByHighestBonusAmount,
  "casino-med-bonus-utan-omsattningskrav": casinosByNoBonusTurnover,
  "casino-med-free-spins": casinosByFreeSpins,
  "casino-med-free-spins-utan-omsattningskrav": casinosByFreeSpinsTurnover,
  "casino-med-swish": casinosBySwishSupport,
  "casino-med-bankid": casinosByBankIdSupport,
};

export function getCasinosForSlug(slug: string): Casino[] {
  return slugToCasinos[slug] ?? casinosByRating;
}