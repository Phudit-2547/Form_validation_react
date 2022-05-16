import './Formcomponents.css'
import {useState} from "react"
const Formcomponent = () => {
    const [userName,setuserName]= useState('')
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [confirmPassword,setconfirmPassword] = useState('')

    const [erroruserName,seterroruserName] = useState('')
    const [erroremail,seterroremail] = useState('')
    const [errorpassword,seterrorpassword] = useState('')
    const [errorconfirmPassword,seterrorconfirmPassword] = useState('')

    const [userNameColor,setuserNameColor] = useState('')
    const [emailColor,setemailColor] = useState('')
    const [passwordColor,setpasswordColor] = useState('')
    const [confirmPasswordColor,setconfirmPasswordColor] = useState('')

    const validateform = (e) => {
        e.preventDefault()

        if(userName.length >= 8) {
            seterroruserName('')
            setuserNameColor('lightgreen')
        } else {
            seterroruserName('Username is required and must be atleast 8 characters')
            setuserNameColor('red')
        }

        if(email.includes('@') && email.length > 6) {
            seterroremail('')
            setemailColor('lightgreen')
        } else {
            seterroremail('Email is required and must be valid')
            setemailColor('red')
        }

        if(password.length >= 6) {
            seterrorpassword('')
            setpasswordColor('lightgreen')
        } else {
            seterrorpassword('Password is required and must be atleast 6 characters')
            setpasswordColor('red')
        }

        if(confirmPassword !== "" && confirmPassword === password) {
            seterrorconfirmPassword('')
            setconfirmPasswordColor('lightgreen')
        } else {
            seterrorconfirmPassword('Password does not match')
            setconfirmPasswordColor('red')
        }
    }

    return(
        <div className="container">
            <form className="form" onSubmit={validateform}>
                <h2>Form Registeration</h2>
                <div className="form-control">
                    <label>Username</label>
                    <input type="text" placeholder="Enter username" value={userName} onChange={(e)=>setuserName(e.target.value)} style={{borderColor:userNameColor}}/>
                    <small style={{color:userNameColor}}>{erroruserName}</small>
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input type="text" placeholder="Enter your email" value={email} onChange={(e) => setemail(e.target.value)} style={{ borderColor: emailColor }} />
                    <small style={{color:emailColor}}>{erroremail}</small>
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setpassword(e.target.value)} style={{ borderColor: passwordColor }}/>
                    <small style={{color:passwordColor}}>{errorpassword}</small>
                </div>
                <div className="form-control">
                    <label>Password Again</label>
                    <input type="password" placeholder="Enter Password again" value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} style={{ borderColor: confirmPasswordColor }}/>
                    <small style={{color:confirmPasswordColor}}>{errorconfirmPassword}</small>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

    export default Formcomponent