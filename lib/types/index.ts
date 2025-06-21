export interface Category {
  id: number;
  name: string;
  features: Feature[];
  products: Product[];
  whyBuy: WhyBuy[];
}

export interface Feature {
  id: number;
  categoryId: number;
  sectionTitle: string;
  headline: string;
  image: string;
  theme: string;
  description: FeatureDetail[];
}

export interface FeatureDetail {
  id: number;
  featureId: number;
  text: string;
  textBreak: boolean;
  textPosition: string;
  image: string;
}

export interface Product {
  id: number;
  categoryId: number;
  name: string;
  description: string;
  price: string;
  variants: string[];
  feature: ProductFeature[];
}

export interface ProductFeature {
  id: string;
  productId: number;
  name: string;
  description: string;
  icon: string;
}

export interface WhyBuy {
  id: number;
  categoryId: number;
  title: string;
  description: string;
  icon: string;
}
