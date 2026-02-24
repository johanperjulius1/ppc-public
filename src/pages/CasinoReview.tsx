import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { getCasinoById } from "@/lib/casinos-data";
import LogoContainer from "@/components/feber/logo-container";
import NotFound from "./NotFound";
import styles from "./ReviewPage.module.css";
import { FaqItem } from "@/types/types";

function getFaqItems(faq: unknown): FaqItem[] {
  if (Array.isArray(faq)) return faq as FaqItem[];
  if (faq && typeof faq === "object" && "faqItems" in faq) {
    return (faq as { faqItems?: FaqItem[] }).faqItems ?? [];
  }
  return [];
}

export default function CasinoReview() {
  const { id } = useParams<{ id: string }>();
  const casino = id ? getCasinoById(id) : null;

  useEffect(() => {
    if (casino) {
      document.title = casino.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && casino.metaDescription) {
        metaDesc.setAttribute("content", casino.metaDescription);
      }
    }
  }, [casino]);

  if (!id || !casino) {
    return <NotFound />;
  }

  const faqItems = getFaqItems(casino.faq);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.headline}>{casino.title}</h1>

      <div className={styles.logoSection}>
        <LogoContainer logoObject={casino.logoObject} />
      </div>

      {casino.content?.trim() && (
        <article className={styles.content}>
          <ReactMarkdown>{casino.content}</ReactMarkdown>
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

      <section className={styles.ctaSection}>
        <a
          className={styles.ctaLink}
          href={casino.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Besok nu
        </a>
      </section>
    </div>
  );
}
