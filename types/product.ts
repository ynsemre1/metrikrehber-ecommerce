export interface Product {
  id: number;
  slug: string;
  title: string;
  image?: {
    url: string;
  };
  successRate: string;
  originalPrice: number;
  discountedPrice: number;
  installmentInfo: string;
  advancePayment: string;
  curriculum: {
    title: string;
    items: ReadonlyArray<string>;
  };
  features: {
    title: string;
    items: ReadonlyArray<string>;
  };
  additionalFeatures: {
    title: string;
    items: ReadonlyArray<{
      name: string;
      details: ReadonlyArray<string>;
    }>;
  };
}