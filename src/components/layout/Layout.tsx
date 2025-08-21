import Menu from "@/components/menu/Menu";
import Footer from "@/components/footer/footer";
import styles from './layout.module.css';
import { ReactNode } from 'react';
import { useBotAndDirectTrafficDetection } from '@/hooks/useBotDetection';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  // Enable bot detection and direct traffic redirect
  useBotAndDirectTrafficDetection(true);
  
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Menu />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}
