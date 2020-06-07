import React from 'react';
import './LogIn.scss';
import useInput from '../../hooks/useInput';
import Button from '../Button/Button';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

const LogIn = () => {

  const usernameControl = useInput('');
  const passwordControl = useInput('');
  const history = useHistory();

  const handleLogInClick = () => {
    history.push('/viikon-tulokset');
  }

  const buttonStyles = {
    marginBottom: '1.5rem',
    marginTop: '1.5rem',
    width:'300px'
  }

  const inputStyle = {
    marginBottom: '0.9rem',
    width: '300px'
  }
  return (
    <div className='log-in'>
      <div className='log-in__content flex-column-center'>
        <span className='log-in__header'>Kirjaudu sisään</span>

        <TextField style={inputStyle} label='Käyttäjänimi' {...usernameControl}/>
        <TextField style={inputStyle} label='Salasana' {...passwordControl}/>

        <Button style={buttonStyles} onClick={handleLogInClick}>Kirjaudu</Button>
      </div>

    </div>
  );
}

export default LogIn;
