import { ProductPage } from './ProductPage'
import { useAppSelector, useAppDispatch } from '../../store/Store'
import { thankgetOneProduct } from '../../store/Slice/ProductSlice'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export const PagesProducts = () => {
  const product = useAppSelector((state) => state.product.product)
  const dispatch = useAppDispatch()
  const param = useParams()

  useEffect(() => {
    dispatch(thankgetOneProduct(Number(param.productId)))
  }, [dispatch, param.productId])

  const addproduct = product.map((e) =>
    e.id === Number(param.productId) ? <ProductPage value={e} key={e.id}/> : null
  )

  return <>{addproduct}</>
}
