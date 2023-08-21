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
import { useState} from 'react'

export const Cart = () => {
  const dispatch = useAppDispatch();
  const isAuts = useAppSelector((state) => state.profil.isAuts);
  const productsInCart = useAppSelector((state) => state.cart.product);
  const SuccessfulPurchase = useAppSelector((state) => state.cart.successfulPurchase);


  if (!isAuts) {
    dispatch(openModal(true));
    return <Navigate to="/"></Navigate>;
  }
  const addProductInCart = productsInCart.map((e) => (
    <ProductInCart
      id={e.id}
      name={e.name}
      autor={e.autor}
      cover={e.cover}
      price={e.price}
      quantity={e.quantity}
    />
  ));
  const totalCost = productsInCart.map((e) => e.price * e.quantity);
  const sum = productsInCart.length !== 0 ? totalCost.reduce((a, b) => a + b) : 0;

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
