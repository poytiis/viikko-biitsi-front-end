import React, { useState } from 'react';
import './Results.scss';
import Layout from '../Layout/Layout';
import Table from '../Table/Table';
import Button from '../Button/Button';
import Input from '../Input/Input';
import DeleteDialog from '../Dialogs/DeleteDialog/DeleteDialog';
import ModifyDialog from '../Dialogs/ModifyDialog/ModifyDialog';
import useDialog from '../../hooks/useDialog';


const Results = () => {

  const deleteDialogControl = useDialog();
  const modifyDialogControl = useDialog();

  const [modifydialogData, setModifydialogData] = useState();

  const tableStyles = {
    marginTop: '4rem'
  }
  const inputStyles = {
    height: '42px'
  }
  const updateButtonStyles = {
    marginLeft: '1.4rem'
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

  return (
   <Layout>
     <div className='results flex-column-center'>
       <Table style={tableStyles} rowClick={openModifyDialogData}></Table>
       <div className='results__cancel-container flex-row'>
         <Button onClick={deleteDialogControl.openDialog}>Poista lohko</Button>
       </div>

       <div className='results__update-container flex-column-center'>
         <span className='results__update-header'>Päivitä tulokset</span>

         <div className='results__update-input-container flex-row'>
           <Input inputHeight={inputStyles} placeholder='viikko' />
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
