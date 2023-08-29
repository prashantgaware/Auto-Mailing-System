import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './logo.jpg';

const App = () => {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div >
        <Link to='/' ><img  className= "navbar-logo" src={Logo} alt='' /></Link> 
        </div>
        <ul className="navbar-links">
          <li><Link to='/' >Home</Link></li>
          <li><Link to='/register' >Register</Link></li>
          <li><Link to='/login' >Login</Link></li>
          {/* <li><Link to='/profile'>Profile</Link></li> */}
        </ul>
      </nav>
    </div>
  );
};

export default App;
