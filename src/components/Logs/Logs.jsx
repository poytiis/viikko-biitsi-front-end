import React from 'react';
import './Logs.scss';
import Layout from '../Layout/Layout';
import Table from '../Table/Table';

const Logs = () => {

  const tableHeaders = ['lokiaika', 'vuosi','viikko', 'lohko', 'Merkintä'];
  return (
    <Layout>
      <div className='logs flex-column-center'>
        <h2 className='logs__header'>Järjestelmän lokimerkinnät</h2>
        <Table headers={tableHeaders}/>
      </div>

    </Layout>
    
  );
}

export default Logs;
