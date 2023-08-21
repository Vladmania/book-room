import { SortingStyle } from './SortingStyle'
import { useState , useEffect } from 'react'
import { GenrePanel } from './GenrePanel'
import { Link } from 'react-router-dom'
import back from '../../pablic/Forward.svg'
import { useAppDispatch, useAppSelector } from '../../store/Store'
import {
  thankGetProduct,
} from '../../store/Slice/ProductSlice'
import {
  minStateSlider,
  maxStateSlider,
  SwitchSortGanreOn,
} from '../../store/Slice/SortingSlice'
import Nouislider from 'nouislider-react'
import 'nouislider/distribute/nouislider.css'
import { useNavigate, useSearchParams } from "react-router-dom";

export const Sorting = () => {
  const [flagPrice, setFlagPrice] = useState(Boolean)
  const [flagGenre, setFlagGenre] = useState(Boolean)
  const [flagSort, setFlagSort] = useState(Boolean)
  const [minMaxFlag, setMinMaxFlag] = useState(Boolean)
  const [priceMin, setPriceMin] = useState(Number)
  const [priceMax, setPriceMax] = useState(Number)
  const [sorting, setSorting] = useState(String)
  const allGenre = useAppSelector((state) => state.sorting.genres)
  const onGenre = useAppSelector((state) => state.sorting.onGenre)
  const minPrice = useAppSelector((state) => state.sorting.sliderMin)
  const maxPrice = useAppSelector((state) => state.sorting.sliderMax)
  const pricemax = useAppSelector((state) => state.product.maxPrice)
  const currentPage = useAppSelector((state) => state.product.currentPage)
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
   
  if(maxPrice === 0){
    dispatch(maxStateSlider(pricemax))
  }

  useEffect(()=>{
    dispatch(SwitchSortGanreOn(searchParams.get("genre") ?? onGenre));
    dispatch(minStateSlider(searchParams.get("minprice") ?? minPrice))
    dispatch(maxStateSlider(searchParams.get("maxprice") ?? maxPrice))  
  }, [])

  const onCheng = (render: number[], handle: number, value: number[]) => {
    dispatch(
      thankGetProduct({
        genre: onGenre,
        minPrice: Number(value[0].toFixed(2)),
        maxPrice: Number(value[1].toFixed(2)),
        currentPage,
        sort: ""
      })
    )
    dispatch(minStateSlider(Number(value[0].toFixed(2))))
    dispatch(maxStateSlider(Number(value[1].toFixed(2))))
  }

  const onUpdate = (render: number[], handle: number, value: number[]) => {
    setPriceMin(Number(value[0].toFixed(2)))
    setPriceMax(Number(value[1].toFixed(2)))
  }

  const sortProduct = (sort: string) =>{
    setSorting(sort)
    dispatch(
    thankGetProduct({
      genre: onGenre,
      minPrice: minPrice,
      maxPrice: maxPrice,
      currentPage,
      sort
    })
    )
    navigate({
      search: `genre=${onGenre}&minprice=${minPrice}&maxprice=${maxPrice}&sort=${sort}`
    })
  }

  const genres = allGenre.map((e) => (
    <GenrePanel genre={e.genre} switch={e.switch} sorting={sorting}/>
  ))

  const toggleWindow = () => {
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
        <div className="sort_button">
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
        <div className="sort_button">
          <div
            className="sort_categories_element"
            onClick={() => toggleWindow()}
          >
            Price
            <img src={back} alt="" className={flagPrice ? 'open' : 'close'} />
          </div>

          {flagPrice ? (
            <div className="sort_price_regulator">
              <Nouislider
                range={{ min: 0, max: pricemax }}
                start={[minPrice, maxPrice]}
                onChange={onCheng}
                onUpdate={onUpdate}
                connect
                onEnd={(e)=> navigate({
                  search: `genre=${onGenre}&minprice=${e[0]}&maxprice=${e[1]}&sort=${sorting}`
                })}
              />
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
              <p onClick={() =>{
                  setMinMaxFlag(minMaxFlag ? false : true)
                  minMaxFlag ? sortProduct('Price') : sortProduct('oppositePrice')
              }
                }>
                Price   
              </p>
              <p
                onClick={() => 
                  sortProduct('Name')
                }
              >
                Name
              </p>
              <p
                onClick={() =>
                  sortProduct('Author name')
                }
              >
                Author name
              </p>
              <p
                onClick={() =>
                  sortProduct('Rating')
                }
              >
                Rating
              </p>
              <p
                onClick={() =>
                  sortProduct('Date of issue')
                }
              >
                Date of issue
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </SortingStyle>
  )
}
