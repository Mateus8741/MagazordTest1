export interface StoreDTO {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  quantity: number;
  rating: Rating;
  title: string;
}

interface Rating {
  count: number;
  rate: number;
}
