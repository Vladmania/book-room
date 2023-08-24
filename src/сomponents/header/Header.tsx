import { StyleHeader } from "./HeaderStyle";
import { StyleHeaderPoisk } from "./HeaderStyle";
import logo from "../../pablic/logo.png";
import search from "../../pablic/Search.png";
import { Authorizations } from "../authorizations/Authorizations";
import { Portal } from "../portal/Portal";
import { Link } from "react-router-dom";
import svgCart from "../../pablic/Cart.svg";
import svgHeart from "../../pablic/Heart.svg";
import svgUserProfil from "../../pablic/User profile (1).svg";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import { openModal } from "../../store/Slice/ProfilSlice";
import { thanksearchQuery } from "../../store/Slice/ProductSlice";

export const Header = () => {
  const isAuts = useAppSelector((state) => state.profil.isAuts);
  const flagModal = useAppSelector((state) => state.profil.modal);
  const prod = useAppSelector((state) => state.cart.product);
  const dispatch = useAppDispatch();

  return (
    <>
      <StyleHeader>
        <Link to={"/"}>
          <img src={logo} alt="logo" className="header_logo" />
        </Link>
        <h3>Catalog</h3>
        <div className="header_poisk">
          <img src={search} alt="search" />
          <input
            placeholder="Search"
            id="Search"
            name="Search"
            onChange={(event) => dispatch(thanksearchQuery(event.target.value))}
          />
        </div>
        {isAuts ? (
          <div className="header_button_collection">
            <div className="header_button_cart_length">{prod.length}</div>
            <Link to={"/cart"}>
              <div className="header_button_if_authorized">
                <img src={svgCart} alt="logo" />
              </div>
            </Link>
            <Link to={"/favorites"}>
              <div className="header_button_if_authorized">
                <img src={svgHeart} alt="logo" />
              </div>
            </Link>
            <Link to={"/profil"}>
              <div className="header_button_if_authorized">
                <img src={svgUserProfil} alt="logo" />
              </div>
            </Link>
          </div>
        ) : (
          <div
            className="header_button"
            onClick={() => dispatch(openModal(true))}
          >
            Log in/ Sing up
          </div>
        )}
        {flagModal ? (
          <Portal>
            <Authorizations />
          </Portal>
        ) : null}
      </StyleHeader>
      <StyleHeaderPoisk className="header_poisk_mobail">
        <img src={search} alt="search" />
        <input
          placeholder="Search"
          id="Search_mobail"
          name="Search_mobail"
          onChange={(event) => dispatch(thanksearchQuery(event.target.value))}
        />
      </StyleHeaderPoisk>
    </>
  );
};
