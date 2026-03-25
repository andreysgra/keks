export type TProduct = {
  id: string;
  title: string;
  category: string;
  type: string;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
}

export type TProducts = TProduct[]

export type TDetailedProduct = TProduct & {
  description: string;
  images: string[];
  weight: number;
  rating: number;
  reviewCount: number;
}
