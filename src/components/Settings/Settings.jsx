import React, {useState} from 'react';
import './Settings.scss';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Layout from '../Layout/Layout';


const Settings = () => {

  const [selectedCountingWay,setSelectedCountingWay ] = useState('one');

  const handleRadioButtonChange = (e) => {
    console.log(e);
    
  }
  return (
    <Layout>
      <div className='settings'>
        <div>
          <span>Pisteiden laskenta periaate</span>
          <RadioGroup aria-label="gender" name="gender1" value={selectedCountingWay} onChange={handleRadioButtonChange}>
            <FormControlLabel value="one" control={<Radio />} label="Viimeisimmän kerran pisteet" />
            <FormControlLabel value="two" control={<Radio />} label="kahden viimekertaisen pisteet" />
          </RadioGroup>
        </div>

    </div>

    </Layout>
    
  );
}

export default Settings;
