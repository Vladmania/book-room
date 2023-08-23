import { ProductCards } from './product card/ProductCard'
import { useAppSelector } from '../../store/Store'
import { CatalogStyle, CatalogFlipStyle } from './Catalog.styles'
import { thankGetProduct } from '../../store/Slice/ProductSlice'
import { useAppDispatch } from '../../store/Store'
import { useEffect, useState } from 'react'
import forward from '../../pablic/Forward.svg'
import back from '../../pablic/Back.svg'
import { useSearchParams } from "react-router-dom";

export const Catalog = () => {
  const [whatPage, setWhatPage]= useState(Number)
  const product = useAppSelector((state) => state.product.product)
  const loading = useAppSelector((state) => state.product.loading)
  const error = useAppSelector((state) => state.product.error)
  const minPrice = useAppSelector((state) => state.sorting.sliderMin)
  const maxPrice = useAppSelector((state) => state.sorting.sliderMax)
  const onGenre = useAppSelector((state) => state.sorting.onGenre)
  const currentPage = useAppSelector((state) => state.product.currentPage)
  const totalProductCount = useAppSelector(
    (state) => state.product.totalProductCount
  )
  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams();


  useEffect(() => {
    dispatch(thankGetProduct({
      genre:  searchParams.get("genre") ?? onGenre,
      minPrice: searchParams.get("minprice") ?? minPrice,
      maxPrice: searchParams.get("maxprice") ?? maxPrice,
      currentPage: whatPage,
      sort: searchParams.get("sort") ?? ""
    }))
  }, [currentPage, dispatch, maxPrice, minPrice, onGenre, searchParams, whatPage])

  const pageCount = Math.ceil(totalProductCount / 12)
  const page = []
  for (let i = 0; i < pageCount; i++) {
    page.push(i)
  }

  const homePageCatalog = product.map((e) => <ProductCards value={e} key={e.id}/>)

  return (
    <>
    <CatalogFlipStyle >
        {currentPage !== 0 ? (
          <img
            src={back}
            alt=""
            className="catalog_flip_back"
            onClick={() => setWhatPage(currentPage - 1)}
          />
        ) : (
          <img src={back} alt="" className="catalog_flip_back" />
        )}
        {page.map((p) => (
          <span key={p}
            className={currentPage === p ? 'namberSize' : 'allSize'}
            onClick={() => setWhatPage(p)}
          ></span>
        ))}
        {currentPage === pageCount - 1 ? (
          <img src={forward} alt="" className="catalog_flip_forward" />
        ) : (
          <img
            src={forward}
            alt=""
            className="catalog_flip_forward"
            onClick={() => setWhatPage(currentPage + 1)}
          />
        )}
      </CatalogFlipStyle>
      <CatalogStyle >
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h1>Явно где-то косяк</h1>
        ) : homePageCatalog}
      </CatalogStyle>
    </>
  )
}
