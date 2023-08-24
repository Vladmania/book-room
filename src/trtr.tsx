import { CartStyle, CartTotal } from "./Cart.styles";
import imgbooks from "../../pablic/unsplash_DgQf1dUKUTM (1).png";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import { ProductInCart } from "./ProductInCart";
import { PurchaseAlert } from './purchaseAlert'
import { openModal } from "../../store/Slice/ProfilSlice";
import { thankShoppingProduct, modalSuccessfulPurchase } from "../../store/Slice/CartSlice";
import { Navigate } from "react-router-dom";
import { Portal } from '../portal/Portal'

export const Cart = () => {

  return (
    <>
    {SuccessfulPurchase ? <Portal><PurchaseAlert /></Portal> : null}
      {productsInCart.length === 0 ? (
        <CartStyle>
          <img src={imgbooks} alt="Книги" />
          <div className="empty_cart_message">
            <h2>Your cart is empty</h2>
            <p>
              Add items to cart to make a purchase.
              <br /> Go to the catalogue no.
            </p>
            <Link to={"/"}>
              <div>Go to catalog</div>
            </Link>
          </div>
        </CartStyle>
      ) : (
        <>
        {addProductInCart}
          <CartTotal>
            <h3>Total: {sum.toFixed(2)}</h3>
            <div className="cart_button collection">
            <Link to={"/"}><div className="cart_button_сontinue">Continue shopping</div></Link>
              <div className="cart_button_сhekout" onClick={()=> {
                dispatch(modalSuccessfulPurchase(true));
                dispatch(thankShoppingProduct());
              } }>Chekout</div>
            </div>
          </CartTotal>
        </>
      )}
    </>
  );
};
