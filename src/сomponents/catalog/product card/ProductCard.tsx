import { ProductCardStyle } from './ProductCardStyle'
import star from '../../../pablic/Starno.svg'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../store/Store'
import { thankaddInCart } from '../../../store/Slice/CartSlice'

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
  const user = useAppSelector((state) => state.profil.profil)
  const dispatch = useAppDispatch()

  return (
    <ProductCardStyle key={props.value.id}>
      <div className="product_card_cover">
        <Link to={'/product/' + props.value.id}>
          <img src={props.value.cover} alt="" />
        </Link>
      </div>
      <p className="product_card_name">{props.value.name}</p>
      <p className="product_card_author">{props.value.autor}</p>
      <div className="product_card_rating">
        <img src={star} alt="" className="img1" />
        <img src={star} alt="" className="img2" />
        <img src={star} alt="" className="img3" />
        <img src={star} alt="" className="img4" />
        <img src={star} alt="" className="img5" />
        <p>{props.value.rating}</p>
      </div>
      <div
        className="product_card_price"
        onClick={() => dispatch(thankaddInCart({
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
        }))}
      >
        $
        {Number(props.value.hardcover_price) === 0
          ? props.value.paperback_price
          : props.value.hardcover_price}{' '}
        USD
      </div>
    </ProductCardStyle>
  )
}
