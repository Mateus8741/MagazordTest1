import { StoreDTO } from '@dtos';
import { create } from 'zustand';

interface CartStore {
  products: StoreDTO[];
  quantity: number;
  addProduct: (product: StoreDTO) => void;
  removeProduct: (product: StoreDTO) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>(set => ({
  products: [],
  quantity: 0,
  addProduct: product =>
    set(state => ({
      products: [...state.products, product],
      quantity: state.quantity + 1,
    })),
  removeProduct: product =>
    set(state => ({
      products: state.products.filter(item => item.id !== product.id),
      quantity: state.quantity - 1,
    })),
  clearCart: () =>
    set(() => ({
      products: [],
      quantity: 0,
    })),
}));

export function useCart() {
  const { products, quantity, addProduct, removeProduct, clearCart } =
    useCartStore();

  return { products, quantity, addProduct, removeProduct, clearCart };
}
