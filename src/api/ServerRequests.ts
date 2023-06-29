import axios from 'axios'


export const getProduct = (currentPage: number) => {
  return axios.get(`http://localhost:5000/api/product?count=12&page=${currentPage}`)
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

export const getCheck = (token: string | null) => {
  return axios.post(
    'http://localhost:5000/api/check',
    { token },
    {
      headers: {
        "Authorization": `Bearer: ${token}`,
      },
    }
  )
}

export const addInCart = ({ ...data }) => {
  return axios.post('http://localhost:5000/api/addcart', { ...data })
}

export const getCart = (token: string) => {
  return axios.post('http://localhost:5000/api/getcart', { token })
}

export const deleteFromCart = (id: number) => {
  return axios.delete(`http://localhost:5000/api/delete/${id}`)
}

export const sortProductGenre = (genre: string, currentPage: number) => {
  return axios.post(`http://localhost:5000/api/sortgenre?count=12&page=${currentPage}`, {genre})
}

export const sortProductPrice = (minPrice: number, maxPrice: number) => {
  return axios.post(`http://localhost:5000/api/sortprice`, {minPrice, maxPrice})
}

export const editCartQuantity = (id: number, quantity: number) => {
  return axios.put(`http://localhost:5000/api/editcart`, {id, quantity})
}

export const sortProduct = (sort: string, currentPage: number) => {
  return axios.post(`http://localhost:5000/api/sortproduct?count=12&page=${currentPage}`, {sort})
}
//Редактирование аватарки
export const putEditorAvatar = (data: string)=>{
     return axios.put(`http://localhost:5000/api/editoruserphoto`, {data}, {
         headers: {
             'Content-Type': 'multipart/form-data'
         }
     })
}
