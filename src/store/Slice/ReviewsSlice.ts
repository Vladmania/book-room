import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { addReviews, getReviews } from '../../api/ServerRequests'

interface IReviews {
  prductId: number;
  name: string;
  avatar: string;
  feedback: string;
  rating: number;
}

interface IinitialState {
  review: IReviews[];
  loading: boolean;
  error: boolean;
}
const initialState: IinitialState = {
  review: [],
  loading: false,
  error: false,
}

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    addReviewsState: (state, action) => {
      state.review = [action.payload]
    },
  },
  extraReducers(builder) {
    builder.addCase(thankaddReviews.pending, (state) => {
      state.loading = true
    })
    builder.addCase(thankaddReviews.fulfilled, (state, actions) => {
      state.review = [...actions.payload]
      state.loading = false
    })
    builder.addCase(thankaddReviews.rejected, (state) => {
      state.error = true
      state.loading = false
    })
    builder.addCase(thankgetReviews.pending, (state) => {
      state.loading = true
    })
    builder.addCase(thankgetReviews.fulfilled, (state, actions) => {
      state.review = actions.payload
      state.loading = false
    })
    builder.addCase(thankgetReviews.rejected, (state) => {
      state.error = true
      state.loading = false
    })
  },
})

export const { addReviewsState } = reviewsSlice.actions

export const thankaddReviews = createAsyncThunk<IReviews[], IReviews>(
  'reviews/thankaddReviews',
  async ({ prductId, name, avatar, feedback, rating }) => {
    try{
      const respons = await addReviews(prductId, name, avatar, feedback, rating)
      return respons.data
    }catch(e){
       console.log(); 
    }
  }
)
export const thankgetReviews = createAsyncThunk<IReviews[], number>(
  'reviews/thankgetReviews',
  async (idProduct) => {
    try{
      const respons = await getReviews(idProduct)
      return respons.data
    }catch(e){
       console.log(); 
    }
  }
)
