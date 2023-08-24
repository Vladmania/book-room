import { AuthorizationsStyle } from "./Authorizations.style";
import people1 from "../../pablic/чел 1.png";
import mail from "../../pablic/Mail.svg";
import hide from "../../pablic/Hide.svg";
import close from "../../pablic/Close.png";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/Store";
import {
  thankPostRegistrtion,
  thankPostLogin,
  openModal,
} from "../../store/Slice/ProfilSlice";

export const Authorizations = () => {
  const [entrance, setEntrance] = useState(false);
  const [visibilityPassword, setVisibilityPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordReplay, setPasswordReplay] = useState("");
  const dispatch = useAppDispatch();
  const errorMessage = useAppSelector((state) => state.profil.message);

  const comparisonPassword = () => {
    if (passwordReplay === password) {
      const arg = {
        email,
        password,
      };
      dispatch(thankPostRegistrtion(arg));
    }
  };

  const showPassword = () => {
    if (visibilityPassword === false) {
      setVisibilityPassword(true);
    } else {
      setVisibilityPassword(false);
    }
  };

  const login = () => {
    dispatch(thankPostLogin({ email, password }));
  };

  return (
    <AuthorizationsStyle>
      <div className="authorizations_modal">
        <div className="authorizations">
          <div className="authorizations_login_singup">
            <div
              className={entrance ? "" : "authorizations_active"}
              onClick={() => setEntrance(false)}
            >
              Log In
            </div>
            <div
              className={entrance ? "authorizations_active" : ""}
              onClick={() => setEntrance(true)}
            >
              /Sign Up
            </div>
          </div>
          <div className="authorizations_field">
            <img src={mail} alt="" />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {errorMessage ? (
            <p className="authorizations_message">{errorMessage}</p>
          ) : null}
          <p>Enter your email</p>
          <div className="authorizations_field">
            <img src={hide} alt="" onClick={() => showPassword()} />
            <input
              type={visibilityPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <p>Enter your password</p>
          {entrance ? (
            <>
              <div className="authorizations_field">
                <img src={hide} alt="" onClick={() => showPassword()} />
                <input
                  type={visibilityPassword ? "text" : "password"}
                  placeholder="Password replay"
                  onChange={(e) => {
                    setPasswordReplay(e.target.value);
                  }}
                />
              </div>
              <p>Repeat your password without errors</p>
            </>
          ) : null}
          {entrance ? (
            <div
              className="authorizations_button"
              onClick={() => comparisonPassword()}
            >
              Sign Up
            </div>
          ) : (
            <div className="authorizations_button" onClick={() => login()}>
              Log In
            </div>
          )}
        </div>
        <img src={people1} alt="" className="authorizations_picture" />
        <img
          src={close}
          alt=""
          className="authorizations_close"
          onClick={() => dispatch(openModal(false))}
        />
      </div>
    </AuthorizationsStyle>
  );
};
