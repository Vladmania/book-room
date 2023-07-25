import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './сomponents/header/Header'
import { HomePage } from './сomponents/Home page/HomePage'
import { Footer } from './сomponents/footer/Footer'
import { Cart } from './сomponents/cart/Cart'
import { Favorites } from "./сomponents/favorites/Favorites"
import { UserProfile } from './сomponents/profile/UserProfile'
import { PagesProducts } from './сomponents/product page/PagesProducts'
import { thankGetProductCart } from './store/Slice/CartSlice'
import { thankGetProductFavorites } from './store/Slice/FavoriteSlice'
import { useAppDispatch, useAppSelector } from './store/Store'
import { useEffect } from 'react'
import { thankAuthorizationCheck } from './store/Slice/ProfilSlice'

function App() {
  const dispatch = useAppDispatch()
 
  useEffect(() => {
    const toket = localStorage.getItem('token')
    if (toket) {
      dispatch(thankAuthorizationCheck(toket))
      dispatch(thankGetProductFavorites(toket))
      dispatch(thankGetProductCart(toket))
    }
  }, [dispatch])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/cart'} element={<Cart />} />
          <Route path={'/favorites'} element={<Favorites />} />
          <Route path={'/profil'} element={<UserProfile />} />
          <Route path={'/product/:productId'} element={<PagesProducts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
