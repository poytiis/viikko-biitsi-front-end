import React from 'react';
import './Table.scss';
import nextIcon from '../../imgs/next.png';
import backIcon from '../../imgs/back.png';


const Table = (props) => {

  const headers = (props.headers || []).map((header, index) => {
    return(  
      <th className={'table__' + (index + 1).toString() +'-column'} key={header}>
        {header}
      </th>
      );
  });

let points = 0;
  const content = (props.players || []).map(row => {
    points +=parseInt(row.score.value);
    return(
      <tr className='table__body-row' key={row.name.value}>
        <td> 
        </td>
        <td onClick={() => {props.rowClick(row)}}>{row.rank.value}</td>
        <td onClick={() => {props.rowClick(row)}}>{row.serie.value}</td>
        <td onClick={() => {props.rowClick(row)}}>{row.score.value}</td>
        <td onClick={() => {props.rowClick(row)}}>{row.name.value}</td>
      </tr>
    );
  });

  const errorMessage = points !== 0
   ? <span>Lohkon pisteet laskettu väärin: {points}</span>
   : null
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
      <div className='table__paginator flex-row-center'>
        <div className='table__paginator-error'>
          {errorMessage}
        </div>
        
       <img onClick={props.nextClick} className='table__paginator-icon' src={backIcon} alt="back arrow"/>
       <img onClick={props.backClick} className='table__paginator-icon'  src={nextIcon} alt=""next arrow/>

      </div>
    </div>
  
  );
}

export default Table;
