import React from 'react';
import Dialog from '../Dialog/Dialog';
import Button from '../../Button/Button';
import './ModifyDialog.scss';
import useInput from '../../../hooks/useInput';
import TextField from '@material-ui/core/TextField';

const ModifyDialog = (props) => {

  const groupControl = useInput(props.content.group);
  const serieControl = useInput(props.content.serie);
  const nameControl = useInput(props.content.name);

  const deleteButtonStyles = {
    backgroundColor: 'var(--gray)'
  };

  const handleUpdate = () => {

  }
  return (
    <Dialog>
      <div className='modify-dialog flex-column-center'>
        <h2 className='modify-dialog__header'>Muokkaa tietoja</h2>

        <div className='modify-dialog__main-content'>

          <div className='flex-column'>
          <TextField {...groupControl} label="lohko" style={{width: '300px',margin: '0.6rem 0'}} />
          <TextField {...serieControl} label="Sarja" style={{width: '300px',margin: '0.6rem 0'}} />
          <TextField {...nameControl} label="Nimi" style={{width: '300px',margin: '0.6rem 0'}} />

          </div>       
          
        </div>

        <div className='modify-dialog__button-container flex-row'>
          <Button onClick={props.close} style={deleteButtonStyles}>Peruuta</Button>
          <Button onClick={handleUpdate}>Muokkaa</Button>
        </div>
      </div>     
    </Dialog>   
  );
}

export default ModifyDialog;