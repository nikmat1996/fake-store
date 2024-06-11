import { create } from 'zustand'
import { Product } from './types'

export type CartState = {
  cart: Product[]
}

export type CartActions = {
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
}

export type CartStore = CartState & CartActions

export const defaultInitState: CartState = {
  cart: [],
}

export const useCartStore = (
  initState: CartState = defaultInitState,
) => {
  return create<CartStore>()((set) => ({
    ...initState,
    addToCart: (newProduct) => set((state) => ({ cart: [...state.cart, newProduct] })),
    removeFromCart: (id) => set((state) => ({ cart: state.cart.filter(item => item.id !== id)})),
  }))
}