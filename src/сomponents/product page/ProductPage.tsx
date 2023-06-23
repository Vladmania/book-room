import { ProductPageStyle } from './ProductPage.style'
import heart from '../../pablic/Union.svg'
import star from '../../pablic/Star.svg'
import pointer from '../../pablic/Back Arrow.svg'

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
  console.log(props.value.paperback_price);
  console.log(props.value.hardcover_price);
  console.log("2");
  
  return (
    <ProductPageStyle>
      <div className="product_page_cover">
        <img src={props.value.cover} alt="" className="product_page_cover_img"/>
        <div className="product_page_favorites">
          <img src={heart} alt="" />
        </div>
      </div>
      <div>
        <h1>{props.value.name}</h1>
        <h3>{props.value.autor}</h3>
        <div className="product_page_rating">
          <img src={star} alt="" />
          <p className="product_page_rating_ball">{props.value.rating}</p>

          <div className="rating">
            <input type="radio" id="star-5" name="rating" value="5" />
            <label  title="Оценка «5»" htmlFor="star-5"></label>
            <input type="radio" id="star-4" name="rating" value="4" />
            <label title="Оценка «4»" htmlFor="star-4"></label>
            <input type="radio" id="star-3" name="rating" value="3" />
            <label htmlFor="star-3"  title="Оценка «3»" ></label>
            <input type="radio" id="star-2" name="rating" value="2" />
            <label htmlFor="star-2" title="Оценка «2»"></label>
            <input type="radio" id="star-1" name="rating" value="1" />
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
            <div className="product_page_paperback">{Number(props.value.paperback_price) === 0 ? "Not available" : props.value.paperback_price}</div>
          </div>
          <div>
            <p>Hardcover</p>
            <div className="product_page_hardcover">
              ${props.value.hardcover_price} USD
            </div>
          </div>
        </div>
      </div>
    </ProductPageStyle>
  )
}
