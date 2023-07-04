import { useAppDispatch, useAppSelector } from '../../store/Store'
import { ProductCard } from '../catalog/product card/ProductCard'
import { RecommendationsStyle } from '../recommendations/Recommendations.Style'

export const Recommendations = () => {
  const product = useAppSelector((state) => state.product.product)
  const namber = Math.floor(Math.random() * 10)

  const reference = product.slice(namber, namber + 4)
  const recommendations = reference.map((event) => (
    <ProductCard value={event} />
  ))

  return (
    <RecommendationsStyle>
      <h2 className="recommendations_header">Recommendations</h2>
      <div className="recommendations_page">{recommendations}</div>
    </RecommendationsStyle>
  )
}
