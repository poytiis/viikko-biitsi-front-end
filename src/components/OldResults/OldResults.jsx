import React from 'react';
import Layout from '../Layout/Layout';
import './OldResults.scss';
import TextField from '@material-ui/core/TextField';
import useInput from '../../hooks/useInput';
import Button from '../Button/Button';
import Table from '../Table/Table';

const OldResults = () => {

  const yearControl = useInput('');
  const weekControl = useInput('');
  const nameControl = useInput('');
  const serieControl = useInput('');

  const searchButtonStyles = {
    transform: 'translateY(5px)'
  }
  const uploadButtonStyles = {
    width: '190px',
  }
  const updateButtonStyles = {
    width: '190px',
    marginRight: '30px'
  }
  const deleteButtonStyles = {
    marginTop: '0.6rem'
  }
  const tableHeaders = ['', 'Lohko', 'Sarja', 'Pisteet', 'Nimi'];
  return (
    <Layout>
      <div className='old-results'>
        <div className='old-results__content flex-column-center'>
          <span className='old-results__header'>Etsi vanhoja tuloksia</span>
          <div className='old-results__search-container'>
            <TextField className='old-results__input' label='Pelaaja' {...nameControl}/>
            <TextField className='old-results__input' label='vuosi' {...yearControl}/>
            <TextField className='old-results__input' label='Viikko' {...weekControl}/>
            <TextField className='old-results__input' label='Sarja' {...serieControl}/>

            <Button style={searchButtonStyles}>Etsi</Button>

          </div>
          <div className='old-results__table-container'>
            <Table headers={tableHeaders}/>
            <Button type='delete' style={deleteButtonStyles}>Poista valitut</Button>

          </div>
          <div className='old-results__button-container'>
            <Button style={updateButtonStyles}>Päivitä ranking</Button>
            <Button style={uploadButtonStyles}>Lataa Exeliin</Button>
          </div>

        </div>

      </div>

    </Layout>
  );
}

export default OldResults;
