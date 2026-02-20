import { Casino, Hotel } from "@/types/types";
import classes from './toplist.module.css';
import OperatorContainer from '../feber/operator-container';

interface ToplistProps {
  items: Casino[] | Hotel[];
  title?: string;
  subtitle?: string;
}

export default function Toplist({
  items,
  title,
  subtitle
}: ToplistProps) {
  // Safety check for empty or undefined data
  if (!items || items.length === 0) {
    return (
      <div className={classes.wrapper}>
        <h1 className={classes.headline}>{title || 'Inga saker hittades'}</h1>
        <h2 className={classes.subtitle}>
          {subtitle || 'Försök igen senare eller kontakta support'}
        </h2>
        <p>Inga saker matchade dina kriterier just nu.</p>
      </div>
    );
  }

  return (
    <div className={classes.wrapper}>
      <h1 className={classes.headline}>{title}</h1>
      <h2 className={classes.subtitle}>
        {subtitle}
      </h2>
      {items.map((item) => (
        <OperatorContainer key={item.title} item={item} />
      ))}
    </div>
  );
}
