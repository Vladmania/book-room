import { createSlice } from "@reduxjs/toolkit";

interface IGenre {
  id: number;
  switch: boolean;
  genre: string;
}

interface IInitialState {
  genres: IGenre[];
  onGenre: string;
  sliderMin: number;
  sliderMax: number;
  sorted: boolean;
  loading: boolean;
  error: boolean;
}

const initialState: IInitialState = {
  genres: [
    {id: 1, switch: false, genre: "Non-fiction" },
    {id: 2, switch: false, genre: `Business and finance` },
    {id: 3, switch: false, genre: "Politics" },
    {id: 4,switch: false, genre: "Travel books" },
    {id: 5, switch: false, genre: "Romance" },
    {id: 6, switch: false, genre: "Satire" },
    {id: 7, switch: false, genre: "Horror" },
    {id: 8, switch: false, genre: "Children’s books" },
    {id: 9, switch: false, genre: "Fantasy" },
  ],
  onGenre: "",
  sliderMin: 0,
  sliderMax: 0,
  sorted: false,
  loading: false,
  error: false,
};

export const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    SwitchSortGanreOn: (state, action) => ({
      ...state,
      genres: state.genres.map((e) => {
        if (e.genre === action.payload) {
          return { ...e, switch: true };
        }
        if (e.genre !== action.payload) {
          return { ...e, switch: false };
        }
        return e;
      }),
      onGenre: action.payload,
    }),
    SwitchSortGanreOff: (state, action) => ({
      ...state,
      genres: state.genres.map((e) => {
        if (e.genre === action.payload) {
          return { ...e, switch: false };
        }
        return e;
      }),
      onGenre: "",
    }),
    minStateSlider: (state, action) => ({
      ...state,
      sliderMin: action.payload,
    }),
    maxStateSlider: (state, action) => ({
      ...state,
      sliderMax: action.payload,
    }),
  },
});

export const {
  SwitchSortGanreOn,
  SwitchSortGanreOff,
  minStateSlider,
  maxStateSlider,
} = sortingSlice.actions;