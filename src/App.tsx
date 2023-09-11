import { useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./сomponents/header/Header";
import { HomePage } from "./сomponents/Home page/HomePage";
import { Footer } from "./сomponents/footer/Footer";
import { Cart } from "./сomponents/cart/Cart";
import { Favorites } from "./сomponents/favorites/Favorites";
import { UserProfile } from "./сomponents/profile/UserProfile";
import { PagesProducts } from "./сomponents/product page/PagesProducts";
import { thankGetProductCart } from "./store/Slice/CartSlice";
import { thankGetProductFavorites } from "./store/Slice/FavoriteSlice";
import { useAppDispatch} from "./store/Store";
import { thankAuthorizationCheck } from "./store/Slice/ProfilSlice";

function App(){
  const dispatch = useAppDispatch();
  const [isRegistered, setIsAuth] = useState(false);
  
  useEffect(() => {
   const loadingData = async() =>{
    const toket = localStorage.getItem("token");
    if (toket) {
     await dispatch(thankAuthorizationCheck(toket));
     await dispatch(thankGetProductFavorites(toket));
     await dispatch(thankGetProductCart(toket));
    setIsAuth(true)
    }
   }
   loadingData()
  }, [dispatch]);

  if(!isRegistered){
    return <div>Загрузка</div>
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/favorites"} element={<Favorites />} />
          <Route path={"/profil"} element={<UserProfile />} />
          <Route path={"/product/:productId"} element={<PagesProducts />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
