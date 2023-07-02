import { Banner } from '../banner/Banner'
import { Sorting } from '../sorting/Sorting'
import { Catalog } from '../catalog/Catalog'
import { BannerAuthorizeNow } from '../banner/BannerAuthorizeNow'
import { useAppDispatch, useAppSelector } from '../../store/Store'
import {HomePageStyle} from "./Homepage.Style"

export const HomePage = () => {
  const isAuts = useAppSelector(state => state.profil.isAuts)
  return (
    <HomePageStyle>
    {isAuts ? null : <BannerAuthorizeNow /> }
    <Catalog />
      <Sorting />
      <Banner />
    </HomePageStyle>
  )
}
