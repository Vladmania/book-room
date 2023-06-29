import { CartStyle, CartTotal } from './Cart.styles'
import imgbooks from '../../pablic/unsplash_DgQf1dUKUTM (1).png'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../store/Store'
import { ProductInCart } from './ProductInCart'

export const Cart = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.profil.profil)
  const prod = useAppSelector((state) => state.cart.product)
  const addProductInCart = prod.map((e) => (
    <ProductInCart
      id={e.id}
      name={e.name}
      autor={e.autor}
      cover={e.cover}
      price={e.price}
      quantity={e.quantity}
    />
  ))
  const totalCost = prod.map(e => e.price * e.quantity)
  const sum = prod.length !== 0 ? totalCost.reduce((a,b) => a + b) : 0

  return (
    <>
      {prod.length === 0 ? (
        <CartStyle>
          <img src={imgbooks} alt="Книги" />
          <div className="empty_cart_message">
            <h2>Your cart is empty</h2>
            <p>
              Add items to cart to make a purchase.
              <br /> Go to the catalogue no.
            </p>
            <Link to={'/'}>
              <span>Go to catalog</span>
            </Link>
          </div>
        </CartStyle>
      ) : (
        <>
          {addProductInCart}
          <CartTotal>
            <h3>Total: {sum}</h3>
            <div className="cart_button collection">
              <div className="cart_button_сontinue">Continue shopping</div>
              <div className="cart_button_сhekout">Chekout</div>
            </div>
          </CartTotal>
        </>
      )}
    </>
  )
}
