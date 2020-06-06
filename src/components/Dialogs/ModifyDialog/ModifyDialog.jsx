import React from 'react';
import Dialog from '../Dialog/Dialog';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import './ModifyDialog.scss';
import useInput from '../../../hooks/useInput';

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

          <Input label='Lohko' control={groupControl}/>
          <Input label='Sarja'control={serieControl}/>
          <Input label='Nimi' control={nameControl}/>
          
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