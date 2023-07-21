import { createSlice } from '@reduxjs/toolkit'
import {
  addInFavorites,
  getFavorites,
  deleteFromFavorites,
} from '../../api/ServerRequests'
import { createAsyncThunk } from '@reduxjs/toolkit'

export interface IProductInFavorit {
  id: number;
  userId: number;
  productId: number;
  name: string;
  autor: string;
  cover: string;
  price: number;
}
export interface IInitialState {
  favorit: IProductInFavorit[];
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
}

const initialState: IInitialState = {
  favorit: [],
  loading: false,
  error: false,
}

export const FavoritSlice = createSlice({
  name: 'favorit',
  initialState,
  reducers: {
    deleteProduct: (state, action) => ({
      ...state,
      favorit: state.favorit.filter((e) => e.productId !== action.payload),
    }),
  },
  extraReducers: (bulder) => {
    bulder.addCase(thankaddInFavorites.pending, (state) => {
      state.loading = true
    })
    bulder.addCase(thankaddInFavorites.fulfilled, (state, actions) => {
      state.favorit = actions.payload
      state.loading = false
    })
    bulder.addCase(thankaddInFavorites.rejected, (state) => {
      state.error = true
      state.loading = false
    })
    bulder.addCase(thankGetProductFavorites.pending, (state) => {
      state.loading = true
    })
    bulder.addCase(thankGetProductFavorites.fulfilled, (state, actions) => {
      state.favorit = actions.payload
      state.loading = false
    })
    bulder.addCase(thankGetProductFavorites.rejected, (state) => {
      state.error = true
      state.loading = false
    })
  },
})

export const { deleteProduct } = FavoritSlice.actions

export const thankaddInFavorites = createAsyncThunk<IProductInFavorit[], IProps>(
  'favorites/thankaddInFavorites',
  async ({ ...data }) => {
    try{
      const respons = await addInFavorites({ ...data })
    return respons.data
    }catch(e){
      console.log(e);
    }
  }
)

export const thankGetProductFavorites = createAsyncThunk<IProductInFavorit[], string>(
  'favorites/thankGetProductFavorites',
  async (token) => {
    try{
      const respons = await getFavorites(token)
      return respons.data
    }catch(e){
      console.log(e);
    }
  }
)

export const thankDeleteProductFavorites = createAsyncThunk<IProductInFavorit[], number>(
  'favorites/thankDeleteProductFavorites',
  async (id) => {
    try{
      const respons = await deleteFromFavorites(id)
      return respons.data
    }catch(e){
      console.log(e);
    }
  }
)