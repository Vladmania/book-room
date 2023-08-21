import { PurchaseAlertStyle } from './PurchaseAlert.styles'
import { thankShoppingProduct, modalSuccessfulPurchase } from "../../store/Slice/CartSlice";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import close from "../../pablic/Close.png";


export const PurchaseAlert = () => {
    const dispatch = useAppDispatch();
    return (
      <PurchaseAlertStyle>
        <div className="shopping_modal">
        <p>Thank you for your purchase</p>
        <img
          src={close}
          alt=""
          className="shopping_close"
          onClick={() => dispatch(modalSuccessfulPurchase(false))}
        />
        </div>
      </PurchaseAlertStyle>
    );
  };