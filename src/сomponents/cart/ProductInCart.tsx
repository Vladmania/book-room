import { ProductInCartStyle } from "./ProductInCart.styles";
import imgdelete from "../../pablic/Delete.svg";
import {
  thankDeleteProduct,
  deleteProduct,
  thankIncreaseQuantityInCart,
  thankDecreaseQuantityInCart,
} from "../../store/Slice/CartSlice";
import { useAppDispatch } from "../../store/Store";

interface IProductInCart {
  id: number;
  name: string;
  autor: string;
  cover: string;
  price: number;
  quantity: number;
}
export const ProductInCart = (props: IProductInCart) => {
  const dispatch = useAppDispatch();

  const del = () => {
    dispatch(thankDeleteProduct(props.id));
    dispatch(deleteProduct(props.id));
  };
  return (
    <ProductInCartStyle>
      <img src={props.cover} alt="" className="ProductInCart_cover" />
      <div className="ProductInCart_information">
        <h2>{props.name}</h2>
        <p>{props.autor}</p>
        <div className="ProductInCart_quantity_and_removal">
          <p
            onClick={() =>
              props.quantity === 0
                ? null
                : dispatch(
                    thankDecreaseQuantityInCart({
                      id: props.id,
                      quantity: props.quantity - 1,
                    })
                  )
            }
          >
            -
          </p>
          <input type="number" value={props.quantity} />
          <p
            onClick={() =>
              dispatch(
                thankIncreaseQuantityInCart({
                  id: props.id,
                  quantity: props.quantity + 1,
                })
              )
            }
          >
            +
          </p>
          <img
            src={imgdelete}
            alt=""
            className="ProductInCart_delete"
            onClick={() => del()}
          />
        </div>
        <p className="ProductInCart_price">${props.price} USD</p>
      </div>
    </ProductInCartStyle>
  );
};
