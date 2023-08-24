import { CartStyle, CartTotal } from "./Cart.styles";
import imgbooks from "../../pablic/unsplash_DgQf1dUKUTM (1).png";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import { ProductInCart } from "./ProductInCart";
import { PurchaseAlert } from './purchaseAlert'
import { openModal } from "../../store/Slice/ProfilSlice";
import { thankShoppingProduct, modalSuccessfulPurchase } from "../../store/Slice/CartSlice";
import { Navigate } from "react-router-dom";
import { Portal } from '../portal/Portal'

export const Cart = () => {
  const dispatch = useAppDispatch();

  const productsInCart = useAppSelector((state) => state.cart.product);

  const dispatch = useAppDispatch();
  const profils = useAppSelector((state) => state.profil.profil);
  const isAuts = useAppSelector((state) => state.profil.isAuts);
  const [changeInfo, setChangeInfo] = useState(Boolean);
  const [error, setError] = useState(Boolean);
  const [changePassword, setChangePassword] = useState(Boolean);
  const [name, setName] = useState(String);
  const [email, setEmail] = useState(String);
  const [oldPassword, setOldPassword] = useState(String);
  const [newPassword, setNewPassword] = useState(String);
  const [replayPassword, setReplayPassword] = useState("");

  if (!isAuts) {
    dispatch(openModal(true));
    return <Navigate to="/"></Navigate>;
  }

  const handleFileInput = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const data = new FormData();
    data.append("avatar", file);
    data.append("id", String(profils[0].id));
    dispatch(thankPutPhoto(data));
  };
  const handleChangePassword = () => {
    if (changeInfo && changePassword) {
      if (newPassword === replayPassword) {
        setError(false);
        dispatch(
          thankEditorPasswordUser({
            token: profils[0].token,
            oldPassword,
            newPassword,
          })
        );
        dispatch(
          thankEditorDataUser({
            token: profils[0].token,
            name: name || profils[0].name,
            email: email || profils[0].email,
          })
        );
        setChangeInfo(false);
        setChangePassword(false);
      } else {
        setError(true);
      }
    } else if (changeInfo) {
      dispatch(
        thankEditorDataUser({
          token: profils[0].token,
          name: name || profils[0].name,
          email: email || profils[0].email,
        })
      );
      setChangeInfo(false);
    } else if (changePassword) {
      if (newPassword === replayPassword) {
        setError(false);
        dispatch(
          thankEditorPasswordUser({
            token: profils[0].token,
            oldPassword,
            newPassword,
          })
        );
        setChangePassword(false);
      } else {
        setError(true);
      }
    }
  };

  if (!isAuts) {

    return <Navigate to="/"></Navigate>;
  }
  const addProductInCart = productsInCart.map((e) => (
    <ProductInCart

      id={e.id}


      price={e.price}

    />
  ));
  const totalCost = productsInCart.map((e) => e.price * e.quantity);


  return (
    <>
    {SuccessfulPurchase ? <Portal><PurchaseAlert /></Portal> : null}
      {productsInCart.length === 0 ? (
        <CartStyle>
          <img src={imgbooks} alt="Книги" />
          <div className="empty_cart_message">
            <h2>Your cart is empty</h2>
            <p>
              Add items to cart to make a purchase.
              <br /> Go to the catalogue no.
            </p>
            <Link to={"/"}>
              <div>Go to catalog</div>
            </Link>
          </div>
        </CartStyle>
      ) : (
        <>
        {addProductInCart}
          <CartTotal>
            <h3>Total: {sum.toFixed(2)}</h3>
            <div className="cart_button collection">
            <Link to={"/"}><div className="cart_button_сontinue">Continue shopping</div></Link>
              <div className="cart_button_сhekout" onClick={()=> {
                dispatch(modalSuccessfulPurchase(true));
                dispatch(thankShoppingProduct());
              } }>Chekout</div>
            </div>
          </CartTotal>
        </>
      )}
    </>
  );
};
