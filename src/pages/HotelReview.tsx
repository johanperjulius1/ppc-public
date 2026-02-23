import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { getHotelById } from "@/lib/hotels-data";
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

export default function HotelReview() {
  const { id } = useParams<{ id: string }>();
  const hotel = id ? getHotelById(id) : null;

  useEffect(() => {
    if (hotel) {
      document.title = hotel.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && hotel.metaDescription) {
        metaDesc.setAttribute("content", hotel.metaDescription);
      }
    }
  }, [hotel]);

  if (!id || !hotel) {
    return <NotFound />;
  }

  const faqItems = getFaqItems(hotel.faq);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.headline}>{hotel.title}</h1>

      <div className={styles.logoSection}>
        <LogoContainer logoObject={hotel.logoObject} />
      </div>

      {hotel.content?.trim() && (
        <article className={styles.content}>
          <ReactMarkdown>{hotel.content}</ReactMarkdown>
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
          href={hotel.affiliateLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Boka nu
        </a>
      </section>
    </div>
  );
}
