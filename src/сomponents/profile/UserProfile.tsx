import { UserProfileStyle } from "./UserProfile.styles"
import imgprofil from "../../pablic/User profile.svg"
import imgemail from "../../pablic/Mail.svg"
import imgpassword from "../../pablic/Hide.svg"
import imgCamera from "../../pablic/Camera.svg"
import { useAppSelector, useAppDispatch } from '../../store/Store'
import noUserPhoto from '../../pablic/User photo.png'
import { thankPutPhoto, thankPostCheck } from '../../store/Slice/ProfilSlice'
import { useState } from 'react'


export const UserProfile = () =>{  
    const dispatch = useAppDispatch()
    const profils = useAppSelector((state) => state.profil.profil)  
    const[changeInfo, setChangeInfo] = useState(Boolean)
    const[changePassword, setChangePassword] = useState(Boolean)
    

const handleFileInput = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const data = new FormData()
    data.append("avatar", file)
    data.append("id", String(profils[0].id))
    dispatch(thankPutPhoto(data))  
};

    return(<UserProfileStyle>
                {profils[0] ? <><div className="UserProfile_photo">
                    <img src={profils[0].photo ? "http://localhost:5000/" + profils[0].photo : noUserPhoto  } 
                        alt="" 
                        className="UserProfile_photo_img"/>
                        <div className="UserProfile_photo_upload">
                            <input type="file" className="photo_upload" onChange={e => handleFileInput(e)}
                                
                            />
                                <img src={imgCamera} alt="" className="photo_upload_img"/>
                                
                            </div>
                        </div>
            <div className="userProfile">
                <div className="userProfile_information">
                    <h2>Personal information</h2>
                    <p onClick={()=> setChangeInfo(changeInfo ? false : true)}>Change information</p>
                </div>
                <div className="userProfile_information_input">
                    <img src={imgprofil} alt="" className="userProfile_profile_img"/>
                    <div className="userProfile_profile_info">
                        <p>Your name</p>
                        {changeInfo ? <input type="text" placeholder=""/> : <input type="text" placeholder="" value={profils[0].name}/>}
                    </div>
                </div>
                <div className="userProfile_information_input">
                    <img src={imgemail} alt="" />
                    <div className="userProfile_profile_info">
                        <p>Your email</p>
                        {changeInfo ? <input type="text" placeholder="" /> : <input type="text" placeholder="" value={profils[0].email}/>}
                    </div>
                </div>
                <div className="userProfile_information_password">
                    <h2>Password</h2>
                    <p onClick={()=> setChangePassword(changePassword ? false : true)}>Change password</p>
                </div>
                <div className="userProfile_information_input">
                    <img src={imgpassword} alt="" />
                    <div className="userProfile_profile_info">
                        <p>{changePassword ? "Old password":"Your password"}</p>
                        {changePassword ? <input type="password" placeholder=""/> :<input type="password" placeholder="" value={profils[0].password}/>}
                    </div>
                </div>
                {changePassword ? <><div className="userProfile_information_input">
                    <img src={imgpassword} alt="" />
                    <div className="userProfile_profile_info">
                        <input type="password" placeholder="New password" />
                    </div>
                </div>
                <p>Enter your password</p>
                <div className="userProfile_information_input">
                    <img src={imgpassword} alt="" />
                    <div className="userProfile_profile_info">
                        <input type="password" placeholder="Password replay" />
                    </div>
                </div><p>Repeat your password without errors</p></> : null}
                {changePassword || changeInfo ? <div className="userProfile_profile_button">Confirm</div> : null}
            </div>
            </> : null}
        </UserProfileStyle>
    )
}