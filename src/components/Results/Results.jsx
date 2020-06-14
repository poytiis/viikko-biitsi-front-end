import React, { useState, useEffect } from 'react';
import './Results.scss';
import Layout from '../Layout/Layout';
import Table from '../Table/Table';
import Button from '../Button/Button';
import DeleteDialog from '../Dialogs/DeleteDialog/DeleteDialog';
import ModifyDialog from '../Dialogs/ModifyDialog/ModifyDialog';
import useDialog from '../../hooks/useDialog';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { getNewScores } from '../../services/httpClient';
import SnackBar from '../SnackBar/SnackBar';


const Results = () => {

  const deleteDialogControl = useDialog();
  const modifyDialogControl = useDialog();

  const [modifydialogData, setModifydialogData] = useState();
  const [snackBarMessage, setSnackBarMessage] = useState('');

  const [tableData, settableData] = useState([]);

  const [pools, setPools] = useState([]);

  const [selectedPool, setSelectedPool] = useState(-1);

  const players = [];
  let poolData = null;

  if (selectedPool !== -1 && pools !== []) {

    console.log(pools[selectedPool])
    const selectedPostId = pools[selectedPool].postId;
    console.log(selectedPostId)

    const data = tableData.filter(row => row.post_id === selectedPostId);
    console.log(data)

    poolData = {
      serie: {
        value: data[0].meta_value,
        id: data[0].meta_key
      },
      rank: {
        value: data[1].meta_value,
        id: data[1].meta_key
      }
    };

    for(let i = 2; i <= 8; i = i + 2) {

      const player = {
        name: {
          value: data[i].meta_value,
          id: data[i].meta_id
        },
        score: {
          value: data[i + 1].meta_value,
          id: data[i + 1].meta_id
        }
      };
      players.push(player);

    }
   
     console.log(players)
 }
  

  useEffect(() => {

  }, [selectedPool]);

  useEffect(() => {

    const comparePools = (first, second) => {

      if (first.serie === 'Miehet' && second.serie === 'Naiset' ) {
        return 1;
      } else if (first.serie === 'Naiset' && second.serie === 'Miehet') {
        return -1;
      } else {
        return parseInt(first.pool) -parseInt(second.pool);
      }

    }
    getNewScores()
      .then(res  => {
        // console.log(res);
        // console.log(res.data)

        const pools = res.data.data.filter(row => row.meta_key === '_field_39').map(pool => pool.meta_value);
        const series = res.data.data.filter(row => row.meta_key === '_field_38').map(serie => serie.meta_value);
        const postIds = res.data.data.filter(row => row.meta_key === '_field_38').map(postId => postId.post_id);

        console.log(pools);
        console.log(series);
        console.log(postIds);

        const poolsCount = pools.length;

        const poolsData = [];

        for(let i = 0; i < poolsCount; i++) {

          const poolObject = {
            pool: pools[i],
            serie: series[i],
            postId: postIds[i]
          };
          poolsData.push(poolObject);
        }

        console.log(poolsData);

        poolsData.sort(comparePools);

        console.log(poolsData);

        settableData(res.data.data);
        setPools(poolsData);
        setSelectedPool(0);

        

      })
      .catch( err => {
        console.log(err);
        setSnackBarMessage('Virhe tulosten haussa');
      })
  }, [settableData, setPools, setSelectedPool]);

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
          players={players}
          pool={poolData}

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
     {  deleteDialogControl.showDialog && 
        <DeleteDialog 
          close={deleteDialogControl.closeDialog} 
          content={createDeleteContent} 
          things='lohkot'
        />
      }

      { modifyDialogControl.showDialog &&
        <ModifyDialog 
          close={modifyDialogControl.closeDialog}
          content={modifydialogData}
        />     
      }

      { snackBarMessage !== '' &&
        <SnackBar close={() => {setSnackBarMessage('')}}>{snackBarMessage}</SnackBar>
      }
   </Layout>
  );
}

export default Results;
