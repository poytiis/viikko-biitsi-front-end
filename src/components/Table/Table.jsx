import React from 'react';
import './Table.scss';
import Checkbox from '@material-ui/core/Checkbox';

const Table = (props) => {
  return (
   <table style={props.style} className='table'>
     <thead className='table__header'>
       <tr>
         <th className='table__first-column'>{}</th>
         <th className='table__second-column'>Lohko</th>
         <th className='table__third-column'>Pisteet</th>
         <th className='table__forth-column'>Nimi</th>
       </tr>
     </thead>
     <tbody className='table__body'>
       <tr className='table__body-row'>
         <td>
           <Checkbox></Checkbox>
         </td>
         <td>1</td>
         <td>-120</td>
         <td>Tiina Pöytäniemi</td>
       </tr>
       <tr className='table__body-row' onClick={() => props.rowClick({group: 1 , serie: 'Naiset', name: 'Tiina'})}>
         <td>
            <Checkbox></Checkbox>
         </td>
         <td>1</td>
         <td>-120</td>
         <td>Tiina Pöytäniemi</td>
       </tr>
       <tr className='table__body-row'>
         <td>
            <Checkbox></Checkbox>
         </td>
         <td>1</td>
         <td>-120</td>
         <td>Tiina Pöytäniemi</td>
       </tr>
        <tr className='table__body-row'>
         <td>
            <Checkbox></Checkbox>
         </td>
         <td>1</td>
         <td>-120</td>
         <td>Tiina Pöytäniemi</td>
       </tr>
        <tr className='table__body-row'>
         <td> 
           <Checkbox></Checkbox></td>
         <td>1</td>
         <td>-120</td>
         <td>Tiina Pöytäniemi</td>
       </tr>
       

     </tbody>
   </table>
  );
}

export default Table;
