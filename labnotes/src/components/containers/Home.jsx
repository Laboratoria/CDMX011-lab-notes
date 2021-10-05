import React, { useState } from "react";
import iconLogout from '../../assets/icons8-salida-64.png'
import { useAuth } from "../../context/AuthContext";
import { Link, useHistory } from 'react-router-dom';
import { auth } from "../../firebase";
import '../../Styles/Home.css';
import logo from '../../assets/nav.png';


const Home = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logout(auth);
      history.push('/');
    } catch (error) {
      setError('Server Error');
    }
  };
  
  return (
    <div>
    <div className="contentNotes">
    <div className='navBar'>
 <img src={logo} alt='logonav' className='logoNav'></img>
    </div>
    <div className='logout'>
    <img src={iconLogout} alt="iconlogout" className="icon" />
    <div className='textlogout'>
    <Link to="/" onClick={handleLogout}>Sign Off</Link>
    </div>
    </div>
      <div className="error">
        {error && <p className="error-message">{error}</p>}
      </div>
      <div className='notes'>
      <Link to='/FormNotes'><button className='btnNotes'>Add a Note</button></Link>
      </div>
      <div className='container'>
      <h1>Hi</h1>
      <p>{currentUser.email}</p>
      </div>
      </div>
      <div className="footer">
        <p>
          Copyright - All rights reserved - Created by Ana Karina Dávila Dávila
        </p>
      </div>
    
    </div>
  );
};
export default Home;
