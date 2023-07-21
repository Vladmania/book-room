import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './Slice/ProductSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { profilSlice } from './Slice/ProfilSlice'
import { CartSlice } from './Slice/CartSlice'
import {sortingSlice} from './Slice/SortingSlice'
import {reviewsSlice} from './Slice/ReviewsSlice'
import { FavoritSlice } from "./Slice/FavoriteSlice"

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    profil: profilSlice.reducer,
    cart: CartSlice.reducer,
    sorting: sortingSlice.reducer,
    review: reviewsSlice.reducer,
    favorit: FavoritSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
