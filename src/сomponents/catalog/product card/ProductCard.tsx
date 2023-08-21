import { ProductCardStyle } from "./ProductCard.Style";
import star from "../../../pablic/Starno.svg";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/Store";
import { thankaddInCart } from "../../../store/Slice/CartSlice";
import {
  thankDeleteProductFavorites,
  deleteProduct,
  thankaddInFavorites,
} from "../../../store/Slice/FavoriteSlice";
import { thankgetOneProduct } from "../../../store/Slice/ProductSlice";
import { openModal } from "../../../store/Slice/ProfilSlice";
import heart from "../../../pablic/Union.svg";
import heartLike from "../../../pablic/Heart (1).svg";
import starLike from "../../../pablic/Star.svg";

interface ProductCard {
  id: number;
  name: string;
  autor: string;
  cover: string;
  rating: number;
  hardcover_price: number;
  paperback_price: number;
}
interface IProps {
  value: ProductCard;
}

export const ProductCard = (props: IProps) => {
  const user = useAppSelector((state) => state.profil.profil);
  const cart = useAppSelector((state) => state.cart.product);
  const isAuts = useAppSelector((state) => state.profil.isAuts);
  const favorit = useAppSelector((state) => state.favorit.favorit);
  const idProductinCart = cart.map((e) => e.productId);
  const idProductinFavorit = favorit.map((e) => e.productId);
  const dispatch = useAppDispatch();

  const del = () => {
    dispatch(thankDeleteProductFavorites(props.value.id));
    dispatch(deleteProduct(props.value.id));
  };

  return (
    <ProductCardStyle key={props.value.id}>
      <div className="product_page_favorites">
        {idProductinFavorit.includes(props.value.id) ? (
          <img src={heartLike} alt="" onClick={() => del()} />
        ) : (
          <img
            src={heart}
            alt=""
            onClick={() =>
              !isAuts
                ? dispatch(openModal(true))
                : dispatch(
                    thankaddInFavorites({
                      userId: user[0].id,
                      productId: props.value.id,
                      name: props.value.name,
                      autor: props.value.autor,
                      cover: props.value.cover,
                      price:
                        Number(props.value.hardcover_price) === 0
                          ? props.value.paperback_price
                          : props.value.hardcover_price,
                    })
                  )
            }
          />
        )}
      </div>
      <div className="product_card_cover">
        <Link to={"/product/" + props.value.id}>
          <img
            src={props.value.cover}
            alt=""
            onClick={() => dispatch(thankgetOneProduct(props.value.id))}
          />
        </Link>
      </div>
      <p className="product_card_name">{props.value.name}</p>
      <p className="product_card_author">{props.value.autor}</p>
      <div className="product_card_rating">
        <img
          src={props.value.rating >= 1 ? starLike : star}
          alt=""
          className="img1"
        />
        <img
          src={props.value.rating >= 2 ? starLike : star}
          alt=""
          className="img2"
        />
        <img
          src={props.value.rating >= 3 ? starLike : star}
          alt=""
          className="img3"
        />
        <img
          src={props.value.rating >= 4 ? starLike : star}
          alt=""
          className="img4"
        />
        <img
          src={props.value.rating >= 5 ? starLike : star}
          alt=""
          className="img5"
        />
        <p>{props.value.rating}</p>
      </div>
      {idProductinCart.includes(props.value.id) ? (
        <div className="if_product_cart">Added to cart</div>
      ) : (
        <div
          className="product_card_price"
          onClick={() =>
            isAuts
              ? dispatch(
                  thankaddInCart({
                    userId: user[0].id,
                    productId: props.value.id,
                    name: props.value.name,
                    autor: props.value.autor,
                    cover: props.value.cover,
                    price:
                      Number(props.value.hardcover_price) === 0
                        ? props.value.paperback_price
                        : props.value.hardcover_price,
                    quantity: 1,
                  })
                )
              : dispatch(openModal(true))
          }
        >
          $
          {Number(props.value.hardcover_price) === 0
            ? props.value.paperback_price
            : props.value.hardcover_price}{" "}
          USD
        </div>
      )}
    </ProductCardStyle>
  );
};
