import { ProductCard } from './product card/ProductCard'
import { useAppSelector } from '../../store/Store'
import { CatalogStyle } from './Catalog.styles'
import { thankGetProduct } from '../../store/Slice/ProductSlice'
import { useAppDispatch } from '../../store/Store'
import { useEffect } from 'react'

export const Catalog = () => {
  const product = useAppSelector((state) => state.product.product)
  const loading = useAppSelector((state) => state.product.loading)
  const error = useAppSelector((state) => state.product.error)
  const currentPage = useAppSelector((state) => state.product.currentPage)
  const pageSize = useAppSelector((state) => state.product.pageSize)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(thankGetProduct({pageSize, currentPage}))
  }, [dispatch])

 
  const homePageCatalog = product.map((e) => <ProductCard value={e} />)
  return (
    <CatalogStyle>
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h1>Явно где-то косяк</h1>
      ) : (
        homePageCatalog
      )}
      
    </CatalogStyle>
  )
}
