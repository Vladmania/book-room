import { createSlice } from '@reduxjs/toolkit'
import { addInCart, getCart, deleteFromCart } from '../../api/ServerRequests'
import { createAsyncThunk } from '@reduxjs/toolkit'

export interface ProductInCart {
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
  product: ProductInCart[];
  loading: boolean;
  error: boolean;
}

export interface IProps {
    userId: number;
    productId: number;
    name: string;
    autor: string;
    cover: string;
    price: number;
    quantity: number,
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
    deleteProduct:(state, action)=>({
      ...state,
      product: state.product.filter(
        (e) => e.id !== action.payload)
    })
  },
  extraReducers: (bulder) => {
    bulder.addCase(thankGetCart.pending, (state) => {
      state.loading = true
    })
    bulder.addCase(thankGetCart.fulfilled, (state, actions) => {
      state.product = actions.payload
      state.loading = false
    })
    bulder.addCase(thankGetCart.rejected, (state) => {
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

export const { deleteProduct } = CartSlice.actions

export const thankGetCart = createAsyncThunk<ProductInCart[], IProps>(
  'product/thankGetCart',
  async ({...data}) => {
    const respons = await addInCart({...data})
    return respons.data
  }
)

export const thankGetProductCart = createAsyncThunk<ProductInCart[], number >(
  'product/thankGetProductCart',
  async (userId) => {
    const respons = await getCart(userId)
    return respons.data
  }
)

export const thankDeleteProduct = createAsyncThunk<ProductInCart[], number >(
  'product/thankDeleteProduct',
  async (id) => {
    const respons = await deleteFromCart(id)
    console.log(respons.data);
    
    return respons.data
  }
)