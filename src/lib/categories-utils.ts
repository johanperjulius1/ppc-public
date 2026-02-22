import categoriesData from "../data/categories.json";
import { Category } from "@/types/types";

type CategoryWithSlug = Category & { slug: string };
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
  const { slug: _slug, ...rest } = found;
  return rest;
}
