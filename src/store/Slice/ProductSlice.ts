import { createSlice } from '@reduxjs/toolkit'
import { getProduct, sortProduct, changeRating, getOneProduct, searchQuery } from '../../api/ServerRequests'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { sortProductPrice } from '../../api/ServerRequests'

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

interface ISortPrice{
  minPrice: number, 
  maxPrice: number
}
export interface IInitialState {
  product: ProductCard[];
  productPage: ProductCard[],
  loading: boolean;
  error: boolean;
  totalProductCount: number,
  currentPage: number;
  pageSize: number;
  maxPrice: number
}

export const initialState: IInitialState = {
  product: [],
  productPage: [],
  loading: false,
  error: false,
  totalProductCount: 0,
  currentPage: 0,
  pageSize: 12,
  maxPrice: 0
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
    setMaxPrice: (state, action)=> ({
      ...state,
      maxPrice: action.payload,
    }),
    
    flipThePage: (state, action)=>({
      ...state, currentPage: action.payload
    })
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
    builder.addCase(thankSortPrice.pending, (state) => {
      state.loading = true
    })
    builder.addCase(thankSortPrice.fulfilled, (state, actions) => {  
      state.product = actions.payload
      state.loading = false
    })
    builder.addCase(thankSortPrice.rejected, (state) => {
      state.error = true
      state.loading = false
    })
    builder.addCase(thankSortProduct.pending, (state) => {
      state.loading = true
    })
    builder.addCase(thankSortProduct.fulfilled, (state, actions) => {  
      state.product = actions.payload
      state.loading = false
    })
    builder.addCase(thankSortProduct.rejected, (state) => {
      state.error = true
      state.loading = false
    })
    builder.addCase(thankgetOneProduct.fulfilled, (state, actions) => {  
      state.productPage = actions.payload
      state.loading = false
    })
    // builder.addCase(thanksearchQuery.fulfilled, (state, actions) => {  
    //   state.product = actions.payload
    //   state.loading = false
    // })
  },
})

export const { addProduct, setTotalProductCount, flipThePage, setMaxPrice } = productSlice.actions

export const thankGetProduct = createAsyncThunk<ProductCard[], number>(
  'product/thankGetProduct',
  async (currentPage,{dispatch}) => {
    const respons = await getProduct(currentPage)
    dispatch(flipThePage(currentPage))
    dispatch(setTotalProductCount(respons.data.totalProductCount))
    dispatch(setMaxPrice(respons.data.maxPrice))
    return respons.data.items
  }
)

export const thankSortPrice = createAsyncThunk<ProductCard[], {minPrice: number, maxPrice: number} >(
  'product/thankSortPrice',
  async ({ minPrice, maxPrice }) => {
    const respons = await sortProductPrice(minPrice, maxPrice)
    return respons.data
  }
)

export const thankSortProduct = createAsyncThunk<ProductCard[], {sort: string, currentPage: number} >(
  'product/thankSortProduct',
  async ({sort, currentPage}) => {
    const respons = await sortProduct(sort, currentPage)
    return respons.data
  }
)

export const thankchangeRating = createAsyncThunk<ProductCard[], {id: number, rating: number} >(
  'product/thankchangeRating',
  async ({id, rating}) => {
    const respons = await changeRating(id, rating)
    return respons.data
  }
)

export const thankgetOneProduct = createAsyncThunk<ProductCard[], number >(
  'product/thankgetOneProduct',
  async (id) => {
    const respons = await getOneProduct(id)
    return respons.data
  }
)
export const thanksearchQuery = createAsyncThunk<ProductCard[], string >(
  'product/thanksearchQuery',
  async (query) => {
    const respons = await searchQuery(query)
    return respons.data
  }
)


