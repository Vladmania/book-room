import { FavoritesStyle } from './Favorites.styles'
import imgbooks from '../../pablic/unsplash_DgQf1dUKUTM (1).png'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../store/Store'
import { ProductInFavorites } from './ProductInFavorites'
import { Navigate } from 'react-router-dom'

export const Favorites = () => {
  const isAuts = useAppSelector((state) => state.profil.isAuts)
  const prod = useAppSelector((state) => state.favorit.favorit)

  if (!isAuts) {
    return <Navigate to="/"></Navigate>
  }
  const addProductInFavorites = prod.map((e) => (
    <ProductInFavorites
      key={e.id}
      id={e.id}
      productId={e.productId}
      name={e.name}
      autor={e.autor}
      cover={e.cover}
      price={e.price}
    />
  ))
  return (
    <>
      {prod.length === 0 ? (
        <FavoritesStyle>
          <img src={imgbooks} alt="Книги" />
          <div className="empty_cart_message">
            <h2>You don't have favorite books</h2>
            <p>
              Add items to your favorites so you don't forget.
              <br /> Go to the catalogue no.
            </p>
            <Link to={'/'}>
              <div>Go to catalog</div>
            </Link>
          </div>
        </FavoritesStyle>
      ) : (
        <>{addProductInFavorites}</>
      )}
    </>
  )
}
