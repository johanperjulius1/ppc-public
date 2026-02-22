import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { getCategoryBySlug, getCategorySlugs } from "@/lib/categories-utils";
import { getCasinosForSlug } from "@/lib/casinos-data";
import Toplist from "@/components/toplist/toplist";
import NotFound from "./NotFound";
import styles from "./CategoryPage.module.css";

const VALID_SLUGS = new Set(getCategorySlugs());

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !VALID_SLUGS.has(slug)) {
    return <NotFound />;
  }

  const category = getCategoryBySlug(slug);
  const casinos = getCasinosForSlug(slug);

  useEffect(() => {
    if (category) {
      document.title = category.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && category.metaDescription && category.metaDescription !== "No Description") {
        metaDesc.setAttribute("content", category.metaDescription);
      }
    }
  }, [category]);

  if (!category) {
    return <NotFound />;
  }

  const faqItems = category.faq && Array.isArray(category.faq) ? category.faq : [];

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.headline}>{category.title}</h1>

      {category.content?.trim() && (
        <article className={styles.content}>
          <ReactMarkdown>{category.content}</ReactMarkdown>
        </article>
      )}

      {faqItems.length > 0 && (
        <section className={styles.faq} aria-label="Vanliga frågor">
          <h2 className={styles.faqTitle}>Vanliga frågor</h2>
          <dl className={styles.faqList}>
            {faqItems.map((item, index) => (
              <div key={index} className={styles.faqItem}>
                <dt className={styles.faqQuestion}>{item.question}</dt>
                <dd className={styles.faqAnswer}>{item.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <section className={styles.toplistSection} aria-label="Casinolista">
        <Toplist
          items={casinos}
          title={category.title}
          subtitle="Jämför erbjudanden och välj det casino som passar dig bäst"
        />
      </section>
    </div>
  );
}
