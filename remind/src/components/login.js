import { useState } from "react"
import { logIn, gmailAuth } from "../firebase/auth";
import { Link, useHistory } from "react-router-dom"
import google from "../img/google.png"
import "./styles/forms.css"
function Login (){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history =  useHistory();
    const handleSignIn = (e) => {
        e.preventDefault();
        logIn(email, password)
        .then(() =>{
            console.log('Iniciaste sesión')
            history.push('/home')
        })
    }
    const handleGmail= (e) =>{
        e.preventDefault()
        gmailAuth()
        .then((result) => {
            history.push('/home')
            const user = result.user.displayName;
            const userPhoto = result.user.photoURL;
            console.log(user, userPhoto);
            console.log('Logeado con Gmail')

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
      
            console.log(errorCode, errorMessage, email, credential);
          });
    }

    return (
        <div className="first-body">
        <form className="form-container">
            <h1 className="form-header">INICIA SESIÓN</h1>
            <input onChange={(e) =>{ setEmail(e.target.value)} }
             id="email" type="email" placeholder="Ingresa tu correo electrónico" />
            <br/>
            <input onChange={(e) =>{ setPassword(e.target.value)} }
            id="password" type="password" placeholder="Contraseña"  />
            <br/>
            <input onClick={handleSignIn}
            type="submit" className="btn-form" value="ENTRAR"/>
            <button onClick= {handleGmail}
            className="g-btn-form">CONTINUAR CON <img src={google} alt="google-icon" className="icon-g"/></button>
            <br/>
            <p className="text-link">¿No tienes cuenta? 
            <Link to="/signin"> Registrate</Link>
            </p>
          </form>
    </div>)
   
}
export default Login