import illustration from '../../pablic/2011.i305.006. 1.svg'
import { BannerAuthorizeNowStyle } from './Banner.style'
import {Authorizations} from "../authorizations/Authorizations"
import {Portal} from "../portal/Portal"
import { useAppDispatch, useAppSelector } from '../../store/Store'
import {openModal} from '../../store/Slice/ProfilSlice'

export const BannerAuthorizeNow = () => {
    const flagModal = useAppSelector((state) => state.profil.modal)
    const dispatch = useAppDispatch()
  return (
    <BannerAuthorizeNowStyle>
        <img src={illustration} alt="" />
        <div className="banner_special_offer">
          <h2>Authorize now</h2>
          <p>Authorize now and discover the fabulous world of books</p>
          <div onClick={() => dispatch(openModal(true))}>Log In/ Sing Up</div>
          {flagModal ? (
        <Portal>
          <Authorizations />
        </Portal>
      ) : null}
      </div>
    </BannerAuthorizeNowStyle>
  )
}
