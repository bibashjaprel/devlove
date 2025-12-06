export interface Category {
  key: string;
  label: string;
  icon: string;
}

export interface PickupLine {
  category: string;
  line: string;
}

export interface QuoteCardProps {
  quote: string;
  loading: boolean;
  count: number;
  onCopy: () => void;
  onGenerate: () => void;
  copied: boolean;
}

export interface CategoryButtonsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (key: string) => void;
  loading: boolean;
}
