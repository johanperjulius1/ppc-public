import { Casino } from "../types/types";
import casinosData from "../data/casinos.json";

export function getAllPostsData(): Casino[] {
  return casinosData as Casino[];
}

export function sortByRating(postsData: Casino[]): Casino[] {
  return [...postsData].sort((a, b) => b.rating - a.rating);
}

function isCasinoWithNumberBonus(post: Casino): post is Casino & { turnoverBonus: number } {
  return typeof post.turnoverBonus === 'number';
}

export function sortBySmallestBonusTurnover(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter(isCasinoWithNumberBonus)
    .sort((a, b) => a.turnoverBonus - b.turnoverBonus);
}

export function sortByBonusAmount(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.bonusAmount > 0)
    .sort((a, b) => b.bonusAmount - a.bonusAmount);
}

export function sortBySwish(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.badges.swish)
    .sort((a, b) => b.rating - a.rating);
}

export function sortByBankId(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.badges.bankId)
    .sort((a, b) => b.rating - a.rating);
}

export function sortByBonusTurnover(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.turnoverBonus === 0)
    .sort((a, b) => b.bonusAmount - a.bonusAmount);
}

export function sortByFreeSpins(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => typeof casino.freeSpins === "number" && casino.freeSpins > 0)
    .sort((a, b) => {
      const aSpins = typeof a.freeSpins === "number" ? a.freeSpins : 0;
      const bSpins = typeof b.freeSpins === "number" ? b.freeSpins : 0;
      return bSpins - aSpins;
    });
}

export function sortByFreeSpinsTurnover(postsData: Casino[]): Casino[] {
  const noTurnoverCasinos = postsData.filter((casino) => {
    const hasFreeSpins = typeof casino.freeSpins === "number" && casino.freeSpins > 0;
    const noTurnover = casino.turnoverFreeSpins === 0 || casino.turnoverFreeSpins === "N/A";
    return hasFreeSpins && noTurnover;
  });

  if (noTurnoverCasinos.length > 0) {
    return noTurnoverCasinos.sort((a, b) => {
      const aSpins = a.freeSpins as number;
      const bSpins = b.freeSpins as number;
      return bSpins - aSpins;
    });
  }

  return postsData
    .filter((casino) => typeof casino.freeSpins === "number" && casino.freeSpins > 0)
    .sort((a, b) => b.rating - a.rating);
}

export function sortByNewCasino(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.newCasino === true)
    .sort((a, b) => b.rating - a.rating);
}

export function sortByHighestBonusAmount(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.bonusAmount > 0)
    .sort((a, b) => b.bonusAmount - a.bonusAmount);
}

export function sortByNoBonusTurnover(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.turnoverBonus === 0)
    .sort((a, b) => b.bonusAmount - a.bonusAmount);
}

export function sortByBankIdSupport(postsData: Casino[]): Casino[] {
  return [...postsData]
    .filter((casino) => casino.badges.bankId)
    .sort((a, b) => b.rating - a.rating);
}