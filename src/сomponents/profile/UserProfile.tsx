import { UserProfileStyle } from "./UserProfile.styles";
import { openModal } from "../../store/Slice/ProfilSlice";
import imgprofil from "../../pablic/User profile.svg";
import imgemail from "../../pablic/Mail.svg";
import imgpassword from "../../pablic/Hide.svg";
import imgCamera from "../../pablic/Camera.svg";
import { useAppSelector, useAppDispatch } from "../../store/Store";
import noUserPhoto from "../../pablic/User photo.png";
import {
  thankPutPhoto,
  thankEditorDataUser,
  thankEditorPasswordUser,
} from "../../store/Slice/ProfilSlice";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export const UserProfile = () => {
  const dispatch = useAppDispatch();
  const profils = useAppSelector((state) => state.profil.profil);
  const isAuts = useAppSelector((state) => state.profil.isAuth);
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

  return (
    <UserProfileStyle>
      {profils[0] ? (
        <>
          <div className="UserProfile_photo">
            <img
              src={
                profils[0].photo
                  ? "http://localhost:5000/" + profils[0].photo
                  : noUserPhoto
              }
              alt=""
              className="UserProfile_photo_img"
            />
            <div className="UserProfile_photo_upload">
              <input
                type="file"
                className="photo_upload"
                onChange={(e) => handleFileInput(e)}
              />
              <img src={imgCamera} alt="" className="photo_upload_img" />
            </div>
          </div>
          <div className="userProfile">
            <div className="userProfile_information">
              <h2>Personal information</h2>
              <p onClick={() => setChangeInfo(changeInfo ? false : true)}>
                Change information
              </p>
            </div>
            <div
              className="userProfile_information_input"
              style={changeInfo ? { boxShadow: "1px 1px 13px #8d8989" } : {}}
            >
              <img src={imgprofil} alt="" className="userProfile_profile_img" />
              <div className="userProfile_profile_info">
                <p>Your name</p>
                {changeInfo ? (
                  <input
                    type="text"
                    placeholder=""
                    onChange={(e) => setName(e.target.value)}
                  />
                ) : (
                  <input type="text" placeholder="" defaultValue={profils[0].name} />
                )}
              </div>
            </div>
            <div
              className="userProfile_information_input"
              style={changeInfo ? { boxShadow: "1px 1px 13px #8d8989" } : {}}
            >
              <img src={imgemail} alt="" />
              <div className="userProfile_profile_info">
                <p>Your email</p>
                {changeInfo ? (
                  <input
                    type="email"
                    placeholder=""
                    onChange={(e) => setEmail(e.target.value)}
                  />
                ) : (
                  <input type="text" placeholder="" defaultValue={profils[0].email} />
                )}
              </div>
            </div>
            <div className="userProfile_information_password">
              <h2>Password</h2>
              <p
                onClick={() => setChangePassword(changePassword ? false : true)}
              >
                Change password
              </p>
            </div>
            <div
              className="userProfile_information_input"
              style={
                changePassword ? { boxShadow: "1px 1px 13px #8d8989" } : {}
              }
            >
              <img src={imgpassword} alt="" />
              <div className="userProfile_profile_info">
                <p>{changePassword ? "Old password" : "Your password"}</p>
                {changePassword ? (
                  <input
                    type="password"
                    placeholder=""
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                ) : (
                  <input type="password" placeholder="" />
                )}
              </div>
            </div>
            {changePassword ? (
              <>
                <div
                  className="userProfile_information_input"
                  style={{ boxShadow: "1px 1px 13px #8d8989" }}
                >
                  <img src={imgpassword} alt="" />
                  <div className="userProfile_profile_info">
                    <input
                      type="password"
                      placeholder="New password"
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                  </div>
                </div>
                <p>Enter your password</p>
                <div
                  className="userProfile_information_input"
                  style={{ boxShadow: "1px 1px 13px #8d8989" }}
                >
                  <img src={imgpassword} alt="" />
                  <div className="userProfile_profile_info">
                    <input
                      type="password"
                      placeholder="Password replay"
                      onChange={(e) => setReplayPassword(e.target.value)}
                    />
                  </div>
                </div>
                <p>{error ? "Repeat your password without errors" : null}</p>
              </>
            ) : null}
            {changePassword || changeInfo ? (
              <div
                className="userProfile_profile_button"
                onClick={() => handleChangePassword()}
              >
                Confirm
              </div>
            ) : null}
          </div>
        </>
      ) : null}
    </UserProfileStyle>
  );
};
