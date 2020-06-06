import React, { useState, useEffect } from 'react';
import './Header.scss';
import userIcon from '../../imgs/user.png';

const Header = () => {

  const [currentTab, setCurrentTab] = useState(null);

  useEffect(() => {
    if(currentTab !== null){
      return;
    }
    setCurrentTab(window.location.pathname);
    console.log(window.location.pathname)

  }, [currentTab]);


  return (
    <div className='header flex-row-center'>
      <div className='header__main-content-container flex-row'>
        <div className='header__tab-container flex-row-center'> 

          <div className={'header__tab flex-row-center' + (currentTab === '/viikon-tulokset' && ' header__tab--active' )}>
            <span>Viikon tulokset</span>
          </div>

          <div className={'header__tab flex-row-center' + (currentTab === '/vanhat-tulokset' && ' header__tab--active' )}>
            <span>Vanhat tulokset</span>
          </div>

          <div className={'header__tab flex-row-center' + (currentTab === '/lokit' && ' header__tab--active' )}>
            <span>Lokit</span>
          </div>

          <div className={'header__tab flex-row-center' + (currentTab === '/asetukset' && ' header__tab--active' )}>
            <span>Asetukset</span>
          </div>
          
         
          
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
