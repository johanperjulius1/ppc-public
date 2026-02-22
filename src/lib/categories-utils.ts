import categoriesData from "../data/categories.json";
import { Category, FaqItem } from "@/types/types";
import { Casino } from "@/types/types";
import {
  casinosByRating,
  casinosByNewCasino,
  casinosByHighestBonusAmount,
  casinosByNoBonusTurnover,
  casinosByFreeSpins,
  casinosByFreeSpinsTurnover,
  casinosBySwishSupport,
  casinosByBankIdSupport,
} from "./casinos-data";

/** Category as stored in categories.json (slug + faq as array) */
export type CategoryWithSlug = Omit<Category, "faq"> & {
  slug: string;
  faq?: FaqItem[];
};

const categories: CategoryWithSlug[] = categoriesData as CategoryWithSlug[];

/** Which casino list each category slug should show */
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

export function getCategoryData(filePath: string): Category {
  const slug = filePath.split("/")[1];
  const found = categories.find((c) => c.slug === slug);
  if (!found) {
    return {
      title: "No Title",
      metaDescription: "No Description",
      content: "",
    };
  }
  const { slug: _slug, faq, ...rest } = found;
  return {
    ...rest,
    faq: faq && faq.length > 0 ? { faqItems: faq } : undefined,
  };
}

export function getCategoryBySlug(slug: string): CategoryWithSlug | null {
  const found = categories.find((c) => c.slug === slug) ?? null;
  return found;
}

export function getCategorySlugs(): string[] {
  return categories.map((c) => c.slug);
}

export function getCasinosForSlug(slug: string): Casino[] {
  return slugToCasinos[slug] ?? casinosByRating;
}
