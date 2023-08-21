import { ProductInCartStyle } from "./ProductInFavorites.styles";
import imgdelete from "../../pablic/Delete.svg";
import {
  thankDeleteProductFavorites,
  deleteProduct,
} from "../../store/Slice/FavoriteSlice";
import { thankaddInCart } from "../../store/Slice/CartSlice";
import { useAppDispatch, useAppSelector } from "../../store/Store";

interface IProductInFavorit {
  id: number;
  productId: number;
  name: string;
  autor: string;
  cover: string;
  price: number;
}
export const ProductInFavorites = (props: IProductInFavorit) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.profil.profil);

  const del = () => {
    dispatch(thankDeleteProductFavorites(props.productId));
    dispatch(deleteProduct(props.productId));
  };
  return (
    <ProductInCartStyle>
      <img src={props.cover} alt="" className="ProductInFavorit_cover" />
      <div className="ProductInFavorit_information">
        <h2>{props.name}</h2>
        <p>{props.autor}</p>
        <div className="ProductInFavorit_addart_and_delete">
          <div
            className="ProductInFavorit_addcart"
            onClick={() =>
              dispatch(
                thankaddInCart({
                  userId: user[0].id,
                  productId: props.id,
                  name: props.name,
                  autor: props.autor,
                  cover: props.cover,
                  price: props.price,
                  quantity: 1,
                })
              )
            }
          >
            Add to cart
          </div>
          <img
            src={imgdelete}
            alt=""
            className="ProductInFavorit_delete"
            onClick={() => del()}
          />
        </div>
        <p className="ProductInFavorit_price">${props.price} USD</p>
      </div>
    </ProductInCartStyle>
  );
};
