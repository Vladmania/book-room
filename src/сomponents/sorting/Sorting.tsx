import { SortingStyle } from './SortingStyle'
import { useState } from 'react'
import { GenrePanel } from './GenrePanel'
import back from '../../pablic/Forward.svg'
import { useAppDispatch, useAppSelector } from '../../store/Store'
import { thankSortPrice,thankSortProduct} from '../../store/Slice/ProductSlice'
import Nouislider from 'nouislider-react'
import 'nouislider/distribute/nouislider.css'

export const Sorting = () => {
  const [flagPrice, setFlagPrice] = useState(Boolean)
  const [flagGenre, setFlagGenre] = useState(Boolean)
  const [flagSort, setFlagSort] = useState(Boolean)
  const [priceMin, setPriceMin] = useState(Number)
  const [priceMax, setPriceMax] = useState(Number)
  const allGenre = useAppSelector((state) => state.sorting.genres)
  const pricemax = useAppSelector((state) => state.product.maxPrice)
  const currentPage = useAppSelector((state) => state.product.currentPage)
  const dispatch = useAppDispatch()

  const onCheng = (render: number[], handle: number, value: number[]) => {
    dispatch(
      thankSortPrice({
        minPrice: Number(value[0].toFixed(2)),
        maxPrice: Number(value[1].toFixed(2)),
      })
    )
  }
  const onUpdate = (render: number[], handle: number, value: number[]) => {
    setPriceMin(Number(value[0].toFixed(2)))
    setPriceMax(Number(value[1].toFixed(2)))
  }

  const genres = allGenre.map((e) => (
    <GenrePanel genre={e.genre} switch={e.switch} />
  ))
  const slider = (
    <Nouislider
      range={{ min: 0, max: pricemax }}
      start={[0, pricemax]}
      onChange={onCheng}
      onUpdate={onUpdate}
      connect
    />
  )

  const togglePrice = () => {
    setFlagPrice(flagPrice ? false : true)
    setFlagGenre(flagGenre ? false : false)
    setFlagSort(flagSort ? false : false)
  }

  const toggleGenre = () => {
    setFlagGenre(flagGenre ? false : true)
    setFlagPrice(flagPrice ? false : false)
    setFlagSort(flagSort ? false : false)
  }
  const toggleSort = () => {
    setFlagSort(flagSort ? false : true)
    setFlagGenre(flagGenre ? false : false)
    setFlagPrice(flagPrice ? false : false)
  }

  return (
    <SortingStyle>
      <h2>Catalog</h2>
      <div className="sort_categories">
        <div>
          <div
            className="sort_categories_element"
            onClick={() => toggleGenre()}
          >
            Genre
            <img src={back} alt="" className={flagGenre ? 'open' : 'close'} />
          </div>
          {flagGenre ? (
            <div className="sort_categories_genre">{genres}</div>
          ) : null}
        </div>
        <div>
          <div
            className="sort_categories_element"
            onClick={() => togglePrice()}
          >
            Price
            <img src={back} alt="" className={flagPrice ? 'open' : 'close'} />
          </div>

          {flagPrice ? (
            <div className="sort_price_regulator">
              {slider}
              <div className="sort_price">
                <p>$ {priceMin}</p>
                <p>$ {priceMax}</p>
              </div>
            </div>
          ) : null}
        </div>
        <div>
          <div className="sort_categories_product" onClick={() => toggleSort()}>
            Sort by price
            <img src={back} alt="" className={flagSort ? 'open' : 'close'} />
          </div>
          {flagSort ? (
            <div className="sort_product">
              <p onClick={()=> dispatch(thankSortProduct({sort: "Price", currentPage}))}>Price</p>
              <p onClick={()=> dispatch(thankSortProduct({sort: "Name", currentPage}))}>Name</p>
              <p onClick={()=> dispatch(thankSortProduct({sort: "Author name", currentPage}))}>Author name</p>
              <p onClick={()=> dispatch(thankSortProduct({sort: "Rating", currentPage}))}>Rating</p>
              <p onClick={()=> dispatch(thankSortProduct({sort: "Date of issue", currentPage}))}>Date of issue</p>
            </div>
          ) : null}
        </div>
      </div>
    </SortingStyle>
  )
}
