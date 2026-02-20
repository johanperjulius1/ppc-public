
export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqBox {
  faqItems?: FaqItem[];
}

export interface Category {
  title: string;
  faq?: FaqBox;
  metaDescription: string
  content: string
}

export interface Casino {
  title: string;
  logoObject: {
    logoTitle: string
    logoName: string
    backgroundColor: string
    altText: string
    width: number
    height: number
  };
  rating: number;
  bonusAmount: number;
  freeSpins: number | string;
  excerpt: string;
  positive1: string;
  positive2: string;
  turnoverBonus: number | string;
  turnoverFreeSpins: number | string;
  perks: {
    perk1?: number | string
    perk2?: number | string
    perk3?: number | string
    perk4?: number | string
    perk5?: number | string
    perk6?: number | string
  },
  badges: {
    trustly: boolean
    swish: boolean
    bankId: boolean
    license: boolean
  }
  newCasino?: boolean
  faq?: FaqBox
  affiliateLink: string
  reviewLink: string
  metaDescription: string
  content: string
}


export interface Hotel {
  title: string;
  logoObject: {
    logoTitle: string
    logoName: string
    backgroundColor: string
    altText: string
    width: number
    height: number
  };
  rating: number;
  bonusAmount: number;
  freeSpins: number | string;
  excerpt: string;
  positive1: string;
  positive2: string;
  turnoverBonus: number | string;
  turnoverFreeSpins: number | string;
  perks: {
    perk1?: number | string
    perk2?: number | string
    perk3?: number | string
    perk4?: number | string
    perk5?: number | string
    perk6?: number | string
  },
  badges: {
    trustly: boolean
    swish: boolean
    bankId: boolean
    license: boolean
  }
  newCasino?: boolean
  faq?: FaqBox
  affiliateLink: string
  reviewLink: string
  metaDescription: string
  content: string
}
