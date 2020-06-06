import React from 'react';
import './LogIn.scss';
import Input from '../Input/Input';
import useInput from '../../hooks/useInput';
import Button from '../Button/Button';
import { useHistory } from 'react-router-dom';

const LogIn = () => {

  const usernameControl = useInput('');
  const passwordControl = useInput('');
  const history = useHistory();

  const handleLogInClick = () => {
    history.push('/viikon-tulokset');
  }

  const buttonStyles = {
    marginBottom: '1.5rem',
    marginTop: '1.5rem'
  }

  const inputStyle = {
    marginBottom: '0.5rem'
  }
  return (
    <div className='log-in'>
      <div className='log-in__content flex-column-center'>
        <span className='log-in__header'>Kirjaudu sisään</span>

        <Input style={inputStyle} label='käyttäjänimi' control={usernameControl}/>
        <Input style={inputStyle} label='Salasana' control={passwordControl}/>

        <Button style={buttonStyles} onClick={handleLogInClick}>Kirjaudu</Button>
      </div>

    </div>
  );
}

export default LogIn;
