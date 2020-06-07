import React, { useState } from 'react';
import './Results.scss';
import Layout from '../Layout/Layout';
import Table from '../Table/Table';
import Button from '../Button/Button';
import DeleteDialog from '../Dialogs/DeleteDialog/DeleteDialog';
import ModifyDialog from '../Dialogs/ModifyDialog/ModifyDialog';
import useDialog from '../../hooks/useDialog';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


const Results = () => {

  const deleteDialogControl = useDialog();
  const modifyDialogControl = useDialog();

  const [modifydialogData, setModifydialogData] = useState();

  const tableStyles = {
    marginTop: '2rem'
  }

  const updateButtonStyles = {
    marginLeft: '1.4rem',
    height: '40px'
  }
  const openModifyDialogData = (data) => {

    setModifydialogData(data);
    modifyDialogControl.openDialog();
  }

  const createDeleteContent = () => {
    const contentStyles = {
      fontSize: '1.2rem'
    }
    return(
      <>
        <p style={contentStyles}>Lohko 2, Naiset</p>
        <p style={contentStyles}>Lohko 3, Miehet</p>
      </>
     
    );
  };

  const tableHeaders = ['', 'Lohko','Sarja' , 'Pisteet', 'Nimi'];

  return (
    <Layout>
      <div className='results flex-column-center'>
        <h2 className='results__header'>Laske viikon tulokset</h2>
        <Table 
          style={tableStyles} 
          rowClick={openModifyDialogData}
          headers={tableHeaders}
        />
        <div className='results__cancel-container flex-row'>
          <Button type='delete' onClick={deleteDialogControl.openDialog}>Poista lohko</Button>
        </div>

        <div className='results__update-container flex-column-center'>
          <span className='results__update-header'>Päivitä tulokset</span>

          <div className='results__update-input-container flex-row'>
            <Select value='current' style={{height: '52px', width: '170px'}}>
              <MenuItem value='current'>Nykyinen viikko</MenuItem>
              <MenuItem value='select'>Valitse viikko</MenuItem>
            </Select>
           
            <Button style={updateButtonStyles}>Päivitä</Button>
          </div>
        </div>

      </div>
     {deleteDialogControl.showDialog && 
      <DeleteDialog 
        close={deleteDialogControl.closeDialog} 
        content={createDeleteContent} 
        things='lohkot'
      />
      }

      {modifyDialogControl.showDialog &&
      <ModifyDialog 
        close={modifyDialogControl.closeDialog}
        content={modifydialogData}
      />     
      }
   </Layout>
  );
}

export default Results;
