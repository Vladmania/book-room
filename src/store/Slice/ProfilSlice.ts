import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import {
  postRegistrtion,
  postLogin,
  getCheck,
  putEditorAvatar,
  editorDataUser,
  editorPasswordUser,
  refresh,
} from '../../api/ServerRequests'

interface IUserProfil {
  id: number;
  email: string;
  password: string;
  name: string;
  photo: string;
  token: string;
}

interface IInitialState {
  profil: IUserProfil[];
  isAuth: boolean;
  loading: boolean;
  error: boolean;
  modal: boolean;
  message: string;
}

interface IProps {
  email: string;
  password: string;
}

const initialState: IInitialState = {
  profil: [],
  isAuth: false,
  loading: false,
  error: false,
  modal: false,
  message: '',
}

export const profilSlice = createSlice({
  name: 'profil',
  initialState,
  reducers: {
    addProfil: (state, action) => ({
      ...state,
      product: [...action.payload],
    }),
    openModal: (state, action) => {
      state.modal = action.payload
    },
    messageError: (state, action) => {
      state.message = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(thankAuthorizationCheck.pending, (state) => {
      state.loading = true
    })
    builder.addCase(thankAuthorizationCheck.fulfilled, (state, actions) => {
      state.profil = actions.payload
      state.loading = false
      state.isAuth = true
    })
    builder.addCase(thankAuthorizationCheck.rejected, (state) => {
      state.loading = false
    })
    builder.addCase(thankPostLogin.pending, (state) => {
      state.loading = true
      state.message = ''
    })
    builder.addCase(thankPostLogin.fulfilled, (state, actions) => {
      if (actions.payload !== undefined) {
        state.profil = actions.payload
        state.loading = false
        state.isAuth = true
        state.modal = false
      }
    })
    builder.addCase(thankPostLogin.rejected, (state) => {
      state.error = true
      state.loading = false
    })
    builder.addCase(thankPostRegistrtion.pending, (state) => {
      state.loading = true
      state.message = ''
    })
    builder.addCase(thankPostRegistrtion.fulfilled, (state, actions) => {
      if (actions.payload !== undefined) {
        state.profil = actions.payload
        state.loading = false
        state.isAuth = true
        state.modal = false
      }
    })
    builder.addCase(thankPostRegistrtion.rejected, (state, actions) => {
      state.loading = false
    })
    builder.addCase(thankPutPhoto.pending, (state) => {
      state.loading = true
    })
    builder.addCase(thankPutPhoto.fulfilled, (state, actions) => {
      state.profil = actions.payload
      state.loading = false
      state.modal = false
    })
    builder.addCase(thankPutPhoto.rejected, (state) => {
      state.error = true
      state.loading = false
    })
    builder.addCase(thankEditorDataUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(thankEditorDataUser.fulfilled, (state, actions) => {
      state.profil = actions.payload
      state.loading = false
    })
    builder.addCase(thankEditorDataUser.rejected, (state) => {
      state.error = true
      state.loading = false
    })
    builder.addCase(thankEditorPasswordUser.pending, (state) => {
      state.loading = true
    })
    builder.addCase(thankEditorPasswordUser.fulfilled, (state, actions) => {
      state.profil = actions.payload
      state.loading = false
    })
    builder.addCase(thankEditorPasswordUser.rejected, (state) => {
      state.error = true
      state.loading = false
    })
  },
})

export const { openModal, messageError } = profilSlice.actions

export const thankPostRegistrtion = createAsyncThunk<IUserProfil[], IProps>(
  'profil/thankPostRegistrtion',
  async (data, { dispatch }) => {
    try {
      const { email, password } = data
      const response = await postRegistrtion(email, password)
      localStorage.setItem('token', response.data[0].token)
      console.log(response.data)
      if (response.data === 'Email invalid') {
        dispatch(messageError('Email invalid'))
      } else if (response.data === 'User with this Email already exists') {
        dispatch(messageError('User with this Email already exists'))
      } else {
        return response.data
      }
    } catch (e) {
      console.log(e)
    }
  }
)

export const thankPostLogin = createAsyncThunk<IUserProfil[], IProps>(
  'profil/thankPostLogin',
  async (data, { dispatch }) => {
    try {
      const { email, password } = data
      const response = await postLogin(email, password)
      if (response.data === 'Invalid email') {
        dispatch(messageError('Invalid email'))
      } else if (response.data === 'Invalid password') {
        dispatch(messageError('Invalid password'))
      } else {
        localStorage.setItem('token', response.data[0].token)
        return response.data
      }
    } catch (e) {
      console.log(e)
    }
  }
)

export const thankAuthorizationCheck = createAsyncThunk<IUserProfil[], string>(
  'profil/thankAuthorizationCheck',
  async (token) => {
    try {
      const response = await getCheck(token)
      if(response.data === 'token is not alive'){
        const newResponse = await refresh(token)
        localStorage.setItem('token', newResponse.data[0].token)
        return newResponse.data
      }else{
        if(!response.data){

        }else{return response.data} }
    } catch (e) {
      console.log(e)
    }
  }
)

export const thankPutPhoto = createAsyncThunk<IUserProfil[], FormData>(
  'profil/thankPutPhoto',
  async (data) => {
    try {
      const response = await putEditorAvatar(data)
      return response.data 
    } catch (e) {
      console.log(e)
    }
  }
)

export const thankEditorDataUser = createAsyncThunk<
  IUserProfil[],
  { token: string, name: string, email: string }
>('profil/thankEditorDataUser', async (data) => {
  try {
    const response = await editorDataUser(data.token, data.name, data.email)
    return response.data
  } catch (e) {
    console.log(e)
  }
})

export const thankEditorPasswordUser = createAsyncThunk<
  IUserProfil[],
  { token: string, oldPassword: string, newPassword: string }
>('profil/thankEditorPasswordUser', async (data) => {
  try {
    const response = await editorPasswordUser(
      data.token,
      data.oldPassword,
      data.newPassword
    )
    return response.data
  } catch (e) {
    console.log(e)
  }
})
