import './Styles/Home.css';
import logo from'../Assets/logo.png';
import box1 from'../Assets/box1.png';
import box2 from'../Assets/box2.png';
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className='containerHome'>
            <header className='headerHome'> 
            <Link to="/myNotes"> 
              <img src= {logo} alt="logo" className="imgLogo" />
            </Link>
            <Link to='/register'>
                <button className='btnSignup'> Registrate </button>
            </Link>
            <Link to='/login'>
                <button className='btnLogin'> Iniciar sesión </button>
            </Link>
            </header>
            <section className='homeText'>
            <img src= {box1} alt="box1" className="box1" />
            <img src= {box2} alt="box2" className="box2" />
            </section>
            
            
        </div>
    )
}

export default Home