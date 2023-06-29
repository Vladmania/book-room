import { UserProfileStyle } from "./UserProfile.styles"
import imgprofil from "../../pablic/User profile.svg"
import imgemail from "../../pablic/Mail.svg"
import imgpassword from "../../pablic/Hide.svg"
import imgCamera from "../../pablic/Camera.svg"
import { useAppSelector } from '../../store/Store'
import noUserPhoto from '../../pablic/User photo.png'


export const UserProfile = () =>{  
    const profils = useAppSelector((state) => state.profil.profil) 

    

    return(
        <UserProfileStyle>
                <div className="UserProfile_photo">
                    <img src={profils[0].photo ? noUserPhoto : noUserPhoto} 
                        alt="" 
                        className="UserProfile_photo_img"/>
                        <div className="UserProfile_photo_upload">
                            <input type="file" className="photo_upload"/>
                                <img src={imgCamera} alt="" className="photo_upload_img"/>
                                
                            </div>
                        </div>
            <div className="userProfile">
                <div className="userProfile_information">
                    <h2>Personal information</h2>
                    <p>Change information</p>
                </div>
                <div className="userProfile_information_input">
                    <img src={imgprofil} alt="" className="userProfile_profile_img"/>
                    <div className="userProfile_profile_info">
                        <p>Your name</p>
                        <input type="text" placeholder="" value={profils[0].name}/>
                    </div>
                </div>
                <div className="userProfile_information_input">
                    <img src={imgemail} alt="" />
                    <div className="userProfile_profile_info">
                        <p>Your email</p>
                        <input type="text" placeholder="" value={profils[0].email}/>
                    </div>
                </div>
                <div className="userProfile_information_password">
                    <h2>Password</h2>
                    <p>Change password</p>
                </div>
                <div className="userProfile_information_input">
                    <img src={imgpassword} alt="" />
                    <div className="userProfile_profile_info">
                        <p>Your password</p>
                        <input type="password" placeholder="" value={profils[0].password}/>
                    </div>
                </div>
            </div>
        </UserProfileStyle>
    )
}