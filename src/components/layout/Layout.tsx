import Menu from "@/components/menu/Menu";
import BotMenu from "@/components/menu/BotMenu";
import Footer from "@/components/footer/footer";
import styles from './layout.module.css';
import { ReactNode } from 'react';
import { useIsBot } from '@/hooks/useBotDetection';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isBot = useIsBot();
  console.log(isBot)

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {isBot ? <Menu /> : <Menu />}
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
