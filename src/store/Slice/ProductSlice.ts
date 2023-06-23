import { createSlice } from '@reduxjs/toolkit'
import { getProduct } from '../../api/ServerRequests'
import { createAsyncThunk } from '@reduxjs/toolkit'

export interface ProductCard {
  id: number;
  name: string;
  autor: string;
  cover: string;
  rating: number;
  description: string;
  status: string;
  paperback_price: number;
  hardcover_price: number;
  paperback_availability: number;
  hardcover_availability: number;
  genre: string;
}
export interface IInitialState {
  product: ProductCard[];
  loading: boolean;
  error: boolean;
}

const initialState: IInitialState = {
  product: [],
  loading: false,
  error: false,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => ({
      ...state,
      product: [...action.payload],
    }),
  },
  extraReducers: (bulder) => {
    bulder.addCase(thankGetProduct.pending, (state) => {
      state.loading = true
    })
    bulder.addCase(thankGetProduct.fulfilled, (state, actions) => {
      state.product = actions.payload
      state.loading = false
    })
    bulder.addCase(thankGetProduct.rejected, (state) => {
      state.error = true
      state.loading = false
    })
  },
})

export const { addProduct } = productSlice.actions

export const thankGetProduct = createAsyncThunk<ProductCard[]>(
  'product/thankGetProduct',
  async () => {
    const respons = await getProduct()
    return respons.data
  }
)
