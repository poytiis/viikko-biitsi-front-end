import React from 'react';
import './Header.scss';
import userIcon from '../../imgs/user.png';

const Header = () => {
  return (
    <div className='header flex-row-center'>
      <div className='header__main-content-container flex-row'>
        <div className='header__tab-container'> 
          <span className='header__tab'>Viikon tulokset</span>
          <span className='header__tab'>Vanhat tulokset</span>
          <span className='header__tab'>Asetukset</span>
        </div>
      </div>
      
      <div className='header__icon-container'>
        <img className='header__icon' src={userIcon} alt="user"/>
        <div className='header__dropdown'>
          <span className='header__dropdown-text'>Kirjaudu ulos</span>
        </div>
      </div>
     
    </div>
  );
}

export default Header;
