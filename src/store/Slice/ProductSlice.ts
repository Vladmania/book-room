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
  totalProductCount: number,
  currentPage: number;
  pageSize: number;
}
interface IProps{
  currentPage: number;
  pageSize: number;
}
const initialState: IInitialState = {
  product: [],
  loading: false,
  error: false,
  totalProductCount: 0,
  currentPage: 0,
  pageSize: 12,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => ({
      ...state,
      product: [...action.payload],
    }),
    setTotalProductCount: (state, action)=> ({
      ...state,
      totalProductCount: action.payload,
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

export const { addProduct, setTotalProductCount } = productSlice.actions

export const thankGetProduct = createAsyncThunk<ProductCard[], IProps>(
  'product/thankGetProduct',
  async ({currentPage, pageSize},{dispatch}) => {
    const respons = await getProduct(currentPage, pageSize)
    dispatch(setTotalProductCount(respons.data.totalProductCount))
    return respons.data.items
  }
)
