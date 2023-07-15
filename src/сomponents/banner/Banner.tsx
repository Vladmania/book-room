import illustration from '../../pablic/2009.i305 1.png'
import illustrationMob from '../../pablic/2009.i305 1.svg'
import { BannerStyle } from './Banner.style'

export const Banner = () => {
  const razmer = () =>{
      return window.innerWidth
  }
  razmer()
  
  return (
    <BannerStyle>
      <div className="banner_special_offer">
        <h2>Build your library with us</h2>
        <p>Buy two books and get one for free</p>
        <div>Choose a book</div>
      </div>
      <img className="full" src={illustration} alt="" />
      <img className="mobail"  src={illustrationMob} alt="" />
    </BannerStyle>
  )
}
