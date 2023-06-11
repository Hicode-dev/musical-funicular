import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { colors } from '@mui/material';
import TabA from './Tabscomp/TabA';
import TabsB from './Tabscomp/TabsB';
import TabsC from './Tabscomp/TabsC';

const Third = () => {
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='bg-white'>
      <div className='mt-[6rem] '>
        <div className="text md:flex mx:justify-center px-5 flex-col items-center mb-10">
          <h3 className='md:max-w-[30rem] font-bold text-[2rem]'>Find the best product for you</h3>
          <p className='font-medium text-zinc-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit dui urna sed tortor volutpat imperdiet.</p>


        </div>
        <div >

          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <div className='md:my-[5rem] flex justify-center items-center'>
                <Box sx={{}}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example" >
                    <Tab label="paersonal Loan" value="1" />
                    <Tab label="Credit Card" value="2" />
                    <Tab label="Mortage" value="3" />
                  </TabList>
                </Box>
              </div>

              <TabPanel value="1"><TabA /></TabPanel>
              <TabPanel value="2"><TabsB /></TabPanel>
              <TabPanel value="3"><TabsC /></TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Third
