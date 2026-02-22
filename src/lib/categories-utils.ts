import categoriesData from "../data/categories.json";
import { Category, FaqItem } from "@/types/types";

/** Category as stored in categories.json (slug + faq as array) */
export type CategoryWithSlug = Omit<Category, "faq"> & {
  slug: string;
  faq?: FaqItem[];
};

const categories: CategoryWithSlug[] = categoriesData as CategoryWithSlug[];

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
