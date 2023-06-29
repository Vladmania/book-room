import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './сomponents/header/Header'
import { HomePage } from './сomponents/Home page/HomePage'
import { Footer } from './сomponents/footer/Footer'
import { Cart } from './сomponents/cart/Cart'
import { UserProfile} from './сomponents/profile/UserProfile'
import { PagesProducts } from './сomponents/product page/PagesProducts'
import { thankGetProductCart } from "./store/Slice/CartSlice"
import { useAppDispatch, useAppSelector} from './store/Store'
import { useEffect } from "react";
import { thankPostCheck } from "./store/Slice/ProfilSlice"

function App() {
  const isAuts = useAppSelector((state) => state.profil.isAuts)
  const cart = useAppSelector((state) => state.cart.product)
  const user = useAppSelector((state) => state.profil.profil)
const dispatch = useAppDispatch()
 useEffect( ()=>{
    const toket = localStorage.getItem("token")
    if(toket){
      dispatch(thankPostCheck(toket))
      dispatch(thankGetProductCart(toket))
    }
  },[dispatch])
// if(isAuts && cart.length === 0){
//   dispatch(thankGetProductCart(user[0].id))
// }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/cart'} element={<Cart />} />
          <Route path={'/profil'} element={<UserProfile />} />
          <Route path={'/product/:productId'} element={<PagesProducts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
