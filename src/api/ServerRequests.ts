import axios from 'axios'

export const getProduct = (currentPage: number) => {
  return axios.get(
    `http://localhost:5000/api/product?count=12&page=${currentPage}`
  )
}

export const getOneProduct = (id: number) => {
  return axios.get(
    `http://localhost:5000/api/oneproduct?id=${id}`
  )
}

export const postRegistrtion = (email: string, password: string) => {
  return axios.post('http://localhost:5000/api/registration', {
    email,
    password,
  })
}

export const postLogin = (email: string, password: string) => {
  return axios.post('http://localhost:5000/api/login', { email, password })
}

export const getCheck = (token: string ) => {
  return axios.post(
    'http://localhost:5000/api/check',
    {},
    {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    }
  )
}
export const refresh = (refreshToken: string ) => {
  return axios.post(
    'http://localhost:5000/api/refresh',
    {},
    {
      headers: {
        Authorization: `Bearer: ${refreshToken}`,
      },
    }
  )
}
export const addInCart = ({ ...data }) => {
  return axios.post('http://localhost:5000/api/addcart', { ...data })
}

export const getCart = (token: string) => {
  return axios.post(
    'http://localhost:5000/api/getcart',
    {},
    {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    }
  )
}

export const deleteFromCart = (id: number) => {
  return axios.delete(`http://localhost:5000/api/delete/${id}`)
}

export const sortProductGenre = (genre: string, currentPage: number) => {
  return axios.post(
    `http://localhost:5000/api/sortgenre?count=12&page=${currentPage}`,
    { genre }
  )
}

export const sortProductPrice = (minPrice: number, maxPrice: number) => {
  return axios.post(`http://localhost:5000/api/sortprice`, {
    minPrice,
    maxPrice,
  })
}

export const editCartQuantity = (id: number, quantity: number) => {
  return axios.put(`http://localhost:5000/api/editcart`, { id, quantity })
}

export const sortProduct = (sort: string, currentPage: number) => {
  return axios.post(
    `http://localhost:5000/api/sortproduct?count=12&page=${currentPage}`,
    { sort }
  )
}
//Редактирование аватарки
export const putEditorAvatar = (data: FormData) => {
  return axios.put(`http://localhost:5000/api/editoruserphoto`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

export const addReviews = (
  prductId: number,
  name: string,
  avatar: string,
  feedback: string,
  rating: number
) => {
  return axios.post(`http://localhost:5000/api/addreviews`, {
    prductId,
    name,
    avatar,
    feedback,
    rating,
  })
}

export const getReviews = (idProduct: number) => {
  return axios.get(`http://localhost:5000/api/getreviews/${idProduct}`)
}

export const changeRating = (id: number, rating: number) => {
  return axios.post(`http://localhost:5000/api/changerating`, { id, rating })
}

export const editorDataUser = (token: string, name: string, email: string) => {
  return axios.put(
    `http://localhost:5000/api/editordata`,
    { name, email },
    {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    }
  )
}

export const editorPasswordUser = (
  token: string,
  oldPassword: string,
  newPassword: string
) => {
  return axios.put(
    `http://localhost:5000/api/editorpassword`,
    { oldPassword, newPassword },
    {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    }
  )
}

export const searchQuery = (query: string) => {
  return axios.post(`http://localhost:5000/api/search`, { query })
}

export const addInFavorites = ({ ...data }) => {
  return axios.post('http://localhost:5000/api/addfavorites', { ...data })
}

export const getFavorites = (token: string) => {
  return axios.post(
    'http://localhost:5000/api/getfavorites',
    {},
    {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    }
  )
}

export const deleteFromFavorites = (id: number) => {
  return axios.delete(`http://localhost:5000/api/deletefavorites/${id}`)
}