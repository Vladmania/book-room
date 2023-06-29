import { ProductCard } from './product card/ProductCard'
import { useAppSelector } from '../../store/Store'
import { CatalogStyle, CatalogFlipStyle } from './Catalog.styles'
import { thankGetProduct } from '../../store/Slice/ProductSlice'
import { useAppDispatch } from '../../store/Store'
import { useEffect } from 'react'
import forward from '../../pablic/Forward.svg'
import back from '../../pablic/Back.svg'

export const Catalog = () => {
  const product = useAppSelector((state) => state.product.product)
  const loading = useAppSelector((state) => state.product.loading)
  const error = useAppSelector((state) => state.product.error)
  const currentPage = useAppSelector((state) => state.product.currentPage)
  const sort = useAppSelector((state) => state.sorting.sort)
  const totalProductCount = useAppSelector(
    (state) => state.product.totalProductCount
  )
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(thankGetProduct(currentPage))
  }, [dispatch])

  const pageCount = Math.ceil(totalProductCount / 12)
  const page = []
  for (let i = 0; i < pageCount; i++) {
    page.push(i)
  }
  const homePageCatalog = product.map((e) => <ProductCard value={e} />)
  const sortProduct = sort.map((e) => <ProductCard value={e} />)
  return (
    <>
      <CatalogStyle>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h1>Явно где-то косяк</h1>
        ) : sort.length !== 0 ? (
          sortProduct
        ) : (
          homePageCatalog
        )}
      </CatalogStyle>
      <CatalogFlipStyle>
        {currentPage !== 0 ? (
          <img
            src={back}
            alt=""
            className="catalog_flip_back"
            onClick={() => dispatch(thankGetProduct(currentPage - 1))}
          />
        ) : (
          <img src={back} alt="" className="catalog_flip_back" />
        )}
        {page.map((p) => (
          <span
            className={currentPage === p ? 'namberSize' : 'allSize'}
            onClick={() => dispatch(thankGetProduct(p))}
          ></span>
        ))}
        {currentPage === pageCount - 1 ? (
          <img src={forward} alt="" className="catalog_flip_forward" />
        ) : (
          <img
            src={forward}
            alt=""
            className="catalog_flip_forward"
            onClick={() => dispatch(thankGetProduct(currentPage + 1))}
          />
        )}
      </CatalogFlipStyle>
    </>
  )
}
