import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tilt from 'react-parallax-tilt';
import style from './tabs.module.scss'

export default function LabTabs({stack}) {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Stack" value="1" />
            <Tab label="Description" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {stack.map((stack)=>
            <Tilt key={stack}>
              <p className={style.text}>{stack}</p>
            </Tilt>
          )}
        </TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
      </TabContext>
    </Box>
  );
}