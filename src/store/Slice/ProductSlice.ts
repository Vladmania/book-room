import { createSlice } from '@reduxjs/toolkit'
import {
  getProduct,
  changeRating,
  getOneProduct,
  searchQuery,
} from '../../api/ServerRequests'
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

interface ISortProduct{
  currentPage: number, 
  genre: string | null, 
  minPrice: number | null | string, 
  maxPrice: number | null | string,
  sort: string | null
}

export interface IInitialState {
  product: ProductCard[];
  productPage: ProductCard[];
  loading: boolean;
  error: boolean;
  totalProductCount: number;
  currentPage: number;
  pageSize: number;
  maxPrice: number;
}

export const initialState: IInitialState = {
  product: [],
  productPage: [],
  loading: false,
  error: false,
  totalProductCount: 0,
  currentPage: 0,
  pageSize: 12,
  maxPrice: 0,
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => ({
      ...state,
      product: [...action.payload],
    }),
    setTotalProductCount: (state, action) => ({
      ...state,
      totalProductCount: action.payload,
    }),
    setMaxPrice: (state, action) => ({
      ...state,
      maxPrice: action.payload,
    }),

    flipThePage: (state, action) => ({
      ...state,
      currentPage: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(thankGetProduct.pending, (state) => {
      state.loading = true
    })
    builder.addCase(thankGetProduct.fulfilled, (state, actions) => {
      state.product = actions.payload
      state.loading = false
    })
    builder.addCase(thankGetProduct.rejected, (state) => {
      state.error = true
      state.loading = false
    })
    builder.addCase(thankgetOneProduct.pending, (state, actions) => {
      state.loading = true
    })
    builder.addCase(thankgetOneProduct.fulfilled, (state, actions) => {
      state.product = actions.payload
      state.loading = false
    })
    builder.addCase(thankgetOneProduct.rejected, (state, actions) => {
      state.error = true
      state.loading = false
    })
    builder.addCase(thanksearchQuery.pending, (state) => {
      state.loading = true
    })
    builder.addCase(thanksearchQuery.fulfilled, (state, actions) => {
      state.product = actions.payload
      state.loading = false
    })
    builder.addCase(thanksearchQuery.rejected, (state) => {
      state.error = true
      state.loading = false
    })
  },
})

export const { addProduct, setTotalProductCount, flipThePage, setMaxPrice } =
  productSlice.actions

export const thankGetProduct = createAsyncThunk<ProductCard[], ISortProduct>(
  'product/thankGetProduct',
  async ({currentPage, genre, minPrice, maxPrice, sort}, { dispatch }) => {
    try {
      const respons = await getProduct(currentPage, genre, minPrice, maxPrice, sort)
      dispatch(flipThePage(currentPage))
      dispatch(setTotalProductCount(respons.data.totalProductCount))
      dispatch(setMaxPrice(respons.data.maxPrice))
      return respons.data.items
    } catch (e) {
      console.log(e)
    }
  }
)

export const thankchangeRating = createAsyncThunk<
  ProductCard[],
  { id: number, rating: number }
>('product/thankchangeRating', async ({ id, rating }) => {
  try {
    const respons = await changeRating(id, rating)
    return respons.data
  } catch (e) {
    console.log(e)
  }
})

export const thankgetOneProduct = createAsyncThunk<ProductCard[], number>(
  'product/thankgetOneProduct',
  async (id) => {
    try {
      const respons = await getOneProduct(id)
      return respons.data
    } catch (e) {
      console.log(e)
    }
  }
)
export const thanksearchQuery = createAsyncThunk<ProductCard[], string>(
  'product/thanksearchQuery',
  async (query) => {
    try {
      const respons = await searchQuery(query)
      return respons.data
    } catch (e) {
      console.log(e)
    }
  }
)
