import { createSlice } from '@reduxjs/toolkit'
import {
  addInCart,
  getCart,
  deleteFromCart,
  editCartQuantity,
} from '../../api/ServerRequests'
import { createAsyncThunk } from '@reduxjs/toolkit'

export interface IProductInCart {
  id: number;
  userId: number;
  productId: number;
  name: string;
  autor: string;
  cover: string;
  price: number;
  quantity: number;
}
export interface IInitialState {
  product: IProductInCart[];
  loading: boolean;
  error: boolean;
}

interface IEditCart {
  id: number;
  quantity: number;
}
export interface IProps {
  userId: number;
  productId: number;
  name: string;
  autor: string;
  cover: string;
  price: number;
  quantity: number;
}

const initialState: IInitialState = {
  product: [],
  loading: false,
  error: false,
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    deleteProduct: (state, action) => ({
      ...state,
      product: state.product.filter((e) => e.id !== action.payload),
    }),
    increaseQuantity: (state, action) => ({
      ...state,
      product: state.product.map((prod) => {
        if (prod.id === action.payload) {
          return { ...prod, quantity: prod.quantity + 1 }
        }
        return prod
      }),
    }),
    decreaseQuantity: (state, action) => ({
      ...state,
      product: state.product.map((prod) => {
        if (prod.id === action.payload) {
          return { ...prod, quantity: prod.quantity - 1 }
        }
        return prod
      }),
    }),
  },
  extraReducers: (bulder) => {
    bulder.addCase(thankaddInCart.pending, (state) => {
      state.loading = true
    })
    bulder.addCase(thankaddInCart.fulfilled, (state, actions) => {
      state.product = actions.payload
      state.loading = false
    })
    bulder.addCase(thankaddInCart.rejected, (state) => {
      state.error = true
      state.loading = false
    })
    bulder.addCase(thankGetProductCart.pending, (state) => {
      state.loading = true
    })
    bulder.addCase(thankGetProductCart.fulfilled, (state, actions) => {
      state.product = actions.payload
      state.loading = false
    })
    bulder.addCase(thankGetProductCart.rejected, (state) => {
      state.error = true
      state.loading = false
    })
  },
})

export const { deleteProduct, decreaseQuantity, increaseQuantity } = CartSlice.actions

export const thankaddInCart = createAsyncThunk<IProductInCart[], IProps>(
  'cart/thankaddInCart',
  async ({ ...data }) => {
    try{
      const respons = await addInCart({ ...data })
    return respons.data
    }catch(e){
      console.log(e);
    }
  }
)

export const thankGetProductCart = createAsyncThunk<IProductInCart[], string>(
  'cart/thankGetProductCart',
  async (token) => {
    try{
      const respons = await getCart(token)
      return respons.data
    }catch(e){
      console.log(e);
    }
  }
)

export const thankDeleteProduct = createAsyncThunk<IProductInCart[], number>(
  'cart/thankDeleteProduct',
  async (id) => {
    try{
      const respons = await deleteFromCart(id)
      console.log(respons.data)
      return respons.data
    }catch(e){
      console.log(e);
    }
  }
)

export const thankIncreaseQuantityInCart = createAsyncThunk<
  IProductInCart[],
  IEditCart
>('cart/thankIncreaseQuantityInCart', async ({ id, quantity },{dispatch}) => {
  try{
    const respons = await editCartQuantity(id, quantity)
    dispatch(increaseQuantity(id))
    return respons.data
  }catch(e){
    console.log(e); 
  }
})

export const thankDecreaseQuantityInCart = createAsyncThunk<
  IProductInCart[],
  IEditCart
>('cart/thankDecreaseQuantityInCart', async ({ id, quantity },{dispatch}) => {
  try{
    const respons = await editCartQuantity(id, quantity)
    dispatch(decreaseQuantity(id))
    return respons.data
  }catch(e){
    console.log(e);  
  }
})