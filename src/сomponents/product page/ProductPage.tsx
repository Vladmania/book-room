import { ProductPageStyle } from './ProductPage.style'
import heart from '../../pablic/Union.svg'
import star from '../../pablic/Star.svg'
import pointer from '../../pablic/Back Arrow.svg'
import { Reviews } from '../reviews/Reviews'
import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/Store'
import { thankgetReviews } from '../../store/Slice/ReviewsSlice'
import { thankaddInCart } from '../../store/Slice/CartSlice'
import { BannerAuthorizeNow } from '../banner/BannerAuthorizeNow'
import { useParams } from 'react-router-dom'

interface IProductPage {
  id: number;
  name: string;
  autor: string;
  cover: string;
  rating: number;
  hardcover_price: number;
  paperback_price: number;
  description: string;
}
interface IProps {
  value: IProductPage;
}

export const ProductPage = (props: IProps) => {
  const [grade, setGrade] = useState(Number)
  const rating = useAppSelector((state) => state.review.review)
  const isAuts = useAppSelector((state) => state.profil.isAuts)
  const user = useAppSelector((state) => state.profil.profil)
  const dispatch = useAppDispatch()
  let param = useParams()

  const overallRating = rating.filter((event) =>
    event.rating ? event.rating : null
  )
  const arrayRating = overallRating.map((e) => (e.rating ? e.rating : 0))
  const sum =
    arrayRating.reduce((acc, num) => acc + num, 0) / arrayRating.length

  useEffect(() => {
    dispatch(thankgetReviews(Number(param.productId)))
  }, [dispatch])

  return (
    <>
      {' '}
      <ProductPageStyle>
        <div className="product_page_cover">
          <img
            src={props.value.cover}
            alt=""
            className="product_page_cover_img"
          />
          <div className="product_page_favorites">
            <img src={heart} alt="" />
          </div>
        </div>
        <div>
          <h1>{props.value.name}</h1>
          <h3>{props.value.autor}</h3>
          <div className="product_page_rating">
            <img src={star} alt="" />
            <p className="product_page_rating_ball">
              {sum ? sum.toFixed(2) : 0}
            </p>

            <div className="rating">
              <input
                type="radio"
                id="star-5"
                name="rating"
                value="5"
                onChange={() => setGrade(5)}
              />
              <label title="Оценка «5»" htmlFor="star-5"></label>
              <input
                type="radio"
                id="star-4"
                name="rating"
                value="4"
                onChange={() => setGrade(4)}
              />
              <label title="Оценка «4»" htmlFor="star-4"></label>
              <input
                type="radio"
                id="star-3"
                name="rating"
                value="3"
                onChange={() => setGrade(3)}
              />
              <label htmlFor="star-3" title="Оценка «3»"></label>
              <input
                type="radio"
                id="star-2"
                name="rating"
                value="2"
                onChange={() => setGrade(2)}
              />
              <label htmlFor="star-2" title="Оценка «2»"></label>
              <input
                type="radio"
                id="star-1"
                name="rating"
                value="1"
                onChange={() => setGrade(1)}
              />
              <label htmlFor="star-1" title="Оценка «1»"></label>
            </div>
            <img
              src={pointer}
              alt="указатель"
              className="product_page_rating_arrow"
            />
            <p className="product_page_rating_pointer"> Rate this book</p>
          </div>
          <h3>Description</h3>
          <p>{props.value.description}</p>
          <div className="product_page_buttons">
            <div className="product_page_button_paperback">
              <p>Paperback</p>
              <div
                className={
                  Number(props.value.paperback_price) === 0
                    ? 'product_page_paperback'
                    : 'product_page_hardcover'
                } onClick={()=> dispatch(
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
                )}
              >
                {Number(props.value.paperback_price) === 0
                  ? 'Not available'
                  : `$ ${props.value.paperback_price} USD`}
              </div>
            </div>
            <div>
              <p>Hardcover</p>
              <div
                className={
                  Number(props.value.hardcover_price) === 0
                    ? 'product_page_paperback'
                    : 'product_page_hardcover'
                }
                onClick={()=> dispatch(
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
                )}
              >
                {Number(props.value.hardcover_price) === 0
                  ? 'Not available'
                  : `$ ${props.value.hardcover_price} USD`}
              </div>
            </div>
          </div>
        </div>
      </ProductPageStyle>
      <Reviews rating={grade} sum={sum} />
      {isAuts ? null : <BannerAuthorizeNow />}
    </>
  )
}
