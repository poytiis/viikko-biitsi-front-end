import React from 'react';
import './Table.scss';
import Checkbox from '@material-ui/core/Checkbox';

const Table = (props) => {

  const headers = (props.headers || []).map((header, index) => {
    return(  <th className={'table__' + (index + 1).toString() +'-column'}>{header}</th>);
  });
  return (
   <table style={props.style} className='table'>
     <thead className='table__header'>
       <tr>
        {headers}
       </tr>
     </thead>
     <tbody className='table__body'>
       <tr className='table__body-row'>
         <td>
           <Checkbox></Checkbox>
         </td>
         <td>1</td>
         <td>Naiset</td>
         <td>-120</td>
         <td>Tiina Pöytäniemi</td>
       </tr>
       <tr className='table__body-row' onClick={() => props.rowClick({group: 1 , serie: 'Naiset', name: 'Tiina'})}>
         <td>
            <Checkbox></Checkbox>
         </td>
         <td>1</td>
         <td>Naiset</td>
         <td>-120</td>
         <td>Tiina Pöytäniemi</td>
       </tr>
       <tr className='table__body-row'>
         <td>
            <Checkbox></Checkbox>
         </td>
         <td>1</td>
         <td>Naiset</td>
         <td>-120</td>
         <td>Tiina Pöytäniemi</td>
       </tr>
        <tr className='table__body-row'>
         <td>
            <Checkbox></Checkbox>
         </td>
         <td>1</td>
         <td>Naiset</td>
         <td>-120</td>
         <td>Tiina Pöytäniemi</td>
       </tr>
        <tr className='table__body-row'>
         <td> 
           <Checkbox></Checkbox></td>
         <td>1</td>
         <td>Naiset</td>
         <td>-120</td>
         <td>Tiina Pöytäniemi</td>
       </tr>
       

     </tbody>
   </table>
  );
}

export default Table;
