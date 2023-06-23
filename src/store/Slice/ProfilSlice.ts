import { createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { postRegistrtion, postLogin, getCheck } from '../../api/ServerRequests'

interface IUserProfil {
  id: number;
  email: string;
  password: string;
  name: string;
  photo: string;
  token: string
}

interface IInitialState {
  profil: IUserProfil[];
  isAuts: boolean;
  loading: boolean;
  error: boolean;
  modal: boolean;
  message: string
}

interface IProps {
  email: string;
  password: string;
}

const initialState: IInitialState = {
  profil: [],
  isAuts: false,
  loading: false,
  error: false,
  modal: false,
  message: ""
}

export const profilSlice = createSlice({
  name: 'profil',
  initialState,
  reducers: {
    addProfil: (state, action) => ({
      ...state,
      product: [...action.payload],
    }),
    openModal: (state, action)=>{
        state.modal = action.payload
    }
  },
  extraReducers(builder) {
    builder.addCase(thankPostCheck.pending, (state) => {
      state.loading = true
    })
    builder.addCase(thankPostCheck.fulfilled, (state, actions) => {
      state.profil = actions.payload
      state.loading = false
      state.isAuts = true
    })
    builder.addCase(thankPostCheck.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(thankPostLogin.pending, (state) => {
      state.loading = true
    })
    builder.addCase(thankPostLogin.fulfilled, (state, actions) => {
      state.profil = actions.payload
      state.loading = false
      state.isAuts = true
      state.modal = false
    })
    builder.addCase(thankPostLogin.rejected, (state) => {
      state.message = "неверный логин или пароль"
      state.error = true
      state.loading = false
    })
    builder.addCase(thankPostRegistrtion.pending, (state) => {
      state.loading = true
    })
    builder.addCase(thankPostRegistrtion.fulfilled, (state, actions) => {
      state.profil = actions.payload
      state.loading = false
      state.isAuts = true
      state.modal = false
    })
    builder.addCase(thankPostRegistrtion.rejected, (state) => {
      state.error = true
      state.loading = false
    })
  },
})

 export const { openModal } = profilSlice.actions

export const thankPostRegistrtion = createAsyncThunk<IUserProfil[], IProps>(
  'profil/thankPostRegistrtion',
  async (data) => {
    const { email, password } = data
    const response = await postRegistrtion(email, password)
    localStorage.setItem("token", response.data[0].token)
    return response.data
  }
)

export const thankPostLogin = createAsyncThunk<IUserProfil[], IProps>(
  'profil/thankPostLogin',
  async (data) => {
    const { email, password } = data
    const response = await postLogin(email, password)
    localStorage.setItem("token", response.data[0].token)
    return response.data
  }
)

export const thankPostCheck = createAsyncThunk<IUserProfil[], string| null>(
  'profil/thankPostCheck',
  async (data) => {
    const  token  = data
    const response = await getCheck(token)
    return response.data
  }
)
