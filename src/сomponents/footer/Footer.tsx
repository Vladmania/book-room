import { FooterStyle } from "./Footer.styles"
import { Link } from "react-router-dom"
import logo from "../../pablic/logo2.png"
import map from "../../pablic/map.png"

export const Footer = () =>{
    return(
        <FooterStyle>
            <div className="footer_content">
                <div>
                    <img src={logo} alt="" />
                    <p className="footer_email">tranthuy.nute@gmail.com</p>
                    <p>(480) 555-0103</p>
                </div>
                    <div className="footer_nav">
                        <Link to={'/'}><p>Home Page</p></Link>
                        <Link to={'/'}><p>Catalog</p></Link>
                        <Link to={'/profil'}><p>My Account</p></Link>
                        <Link to={'/cart'}><p>Cart</p></Link>
                    </div>
                <div className="footer_map">
                    <p>6391 Elgin St. Celina, Delaware 10299</p>
                    <img src={map} alt="карта" className="footer_map_img"/>
                </div>
            </div>
        </FooterStyle>
    )
}