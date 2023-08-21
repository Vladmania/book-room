import { createSlice } from "@reduxjs/toolkit";

interface IGenre {
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
    { switch: false, genre: "Non-fiction" },
    { switch: false, genre: `Business and finance` },
    { switch: false, genre: "Politics" },
    { switch: false, genre: "Travel books" },
    { switch: false, genre: "Romance" },
    { switch: false, genre: "Satire" },
    { switch: false, genre: "Horror" },
    { switch: false, genre: "Children’s books" },
    { switch: false, genre: "Fantasy" },
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
