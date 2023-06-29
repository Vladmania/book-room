import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { sortProductGenre} from '../../api/ServerRequests'
import {ProductCard} from './ProductSlice'

interface IGenre{
    switch: boolean
    genre: string
}

interface ISortProduct{
  genre: string,
  currentPage: number
}

interface IInitialState{
    genres: IGenre[],
    sort:ProductCard[],
    sliderMin: number,
    sliderMax: number,
    sorted: boolean,
    loading: boolean,
    error: boolean

}

const initialState: IInitialState = {
  genres: [
    {switch: false, genre: 'Fiction'},
    {switch: false, genre: 'Non-fiction'},
    {switch: false, genre: 'Business & finance'},
    {switch: false, genre: 'Politics'},
    {switch: false, genre: 'Travel books'},
    {switch: false, genre: 'Romance'},
    {switch: false, genre: 'Satire'},
    {switch: false, genre: 'Horror'},
    {switch: false, genre: 'Children’s books'},
    {switch: false, genre: 'Encyclopedia'},
    {switch: false, genre: "Fantasy"},
  ],
  sort: [],
  sliderMin: 0,
  sliderMax: 0,
  sorted: false,
  loading: false,
  error: false
}

export const sortingSlice = createSlice({
    
  name: 'sorting',
  initialState,
  reducers: {
    SwitchSortGanreOn: (state, action) => ({
        ...state,
        genres: state.genres.map(e =>{ if(e.genre === action.payload){
            return {...e, switch: true}

        }return e} ),
        sorted: true,
      }),
      SwitchSortGanreOff: (state, action) => ({
        ...state,
        genres: state.genres.map(e =>{ if(e.genre === action.payload){
            return {...e, switch: false}

        }return e} ), 
        sort: state.sort.filter(e => e.genre !== action.payload),
        sorted: state.sort.length !== 0,
      }),
      minStateSlider: (state, action) => ({
        ...state, sliderMin: action.payload  
  }),
},
  extraReducers(builder){
    builder.addCase(thankSortProductGanre.pending, (state) => {
        state.loading = true
      })
      builder.addCase(thankSortProductGanre.fulfilled, (state, actions) => {  
        state.sort = state.sort.concat(actions.payload)
        state.loading = false
      })
      builder.addCase(thankSortProductGanre.rejected, (state) => {
        state.error = true
        state.loading = false
      })
  },
})

export const {SwitchSortGanreOn, SwitchSortGanreOff} = sortingSlice.actions

export const thankSortProductGanre = createAsyncThunk<ProductCard[], ISortProduct >(
    'sorting/thankSortProductGanre',
    async ({genre, currentPage}) => {
      const respons = await sortProductGenre(genre , currentPage)
      return respons.data
    }
  )


  
