import { ProductPage } from "./ProductPage"
import { useAppSelector } from '../../store/Store'
import { useParams } from 'react-router-dom';

export const PagesProducts = () =>{
    const product = useAppSelector((state) => state.product.product)
    const param = useParams()
    
    const addproduct = product.map(e => e.id === Number(param.productId) ? 
    <ProductPage value={e}/> : null)
           
    return(
        <>{addproduct}</>
    )
}