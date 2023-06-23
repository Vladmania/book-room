import axios from 'axios'


export const getProduct = (currentPage: number, pageSize: number) => {
  return axios.get(`http://localhost:5000/api/product?count=${pageSize}&page=${currentPage}`)
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
        Authorization: `Bearer: ${token}`,
      },
    }
  )
}

export const addInCart = ({ ...data }) => {
  return axios.post('http://localhost:5000/api/addcart', { ...data })
}

export const getCart = (userId: number) => {
  return axios.post('http://localhost:5000/api/addcart', { userId })
}

export const deleteFromCart = (id: number) => {
  return axios.delete(`http://localhost:5000/api/delete/${id}`)
}
//Редактирование аватарки
// export const putEditorAvatar = (data)=>{
//      return axios.put(url + 'editoruseravatar', data, {
//          headers: {
//              'Content-Type': 'multipart/form-data'
//          }
//      }).then(res => {return res.data})
// }
