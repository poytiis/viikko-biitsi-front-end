import React from 'react';
import './Table.scss';
import Checkbox from '@material-ui/core/Checkbox';

const Table = (props) => {

  const headers = (props.headers || []).map((header, index) => {
    return(  
      <th className={'table__' + (index + 1).toString() +'-column'} key={header}>
        {header}
      </th>
      );
  });

  const content = (props.content || [1,1,1,1]).map(row => {
    return(
      <tr className='table__body-row'>
        <td> 
          <Checkbox></Checkbox></td>
        <td>1</td>
        <td>Naiset</td>
        <td>-120</td>
        <td>Tiina Pöytäniemi</td>
      </tr>
    );
  })
  return (
    <div className='table__container'>
      <table style={props.style} className='table'>
        <thead className='table__header'>
          <tr>
            {headers}
          </tr>
        </thead>
        <tbody className='table__body'>
          {content}
        </tbody>
      </table>

    </div>
  
  );
}

export default Table;
