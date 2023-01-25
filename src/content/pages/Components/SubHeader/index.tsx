import { useState, SyntheticEvent } from 'react';

import { Typography, Button, Grid, Box, Tab, Tabs } from '@mui/material';

import TuneIcon from '@mui/icons-material/Tune';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function PageSubHeader({ heading }) {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h2" component="h2" gutterBottom>
          {heading}
        </Typography>
        {/* <Typography variant="subtitle2">
          {user.name}, these are your recent transactions
        </Typography> */}
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          sx={{ margin: 1, color: '#333333', borderColor: '#333333' }}
          startIcon={<TuneIcon />}
        >
          Filter
        </Button>
      </Grid>

      <Box sx={{ width: '100%' }}>
        <Tabs
          variant="scrollable"
          scrollButtons="auto"
          // textColor="primary"
          // indicatorColor="primary"
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              backgroundColor: '#519900',
              borderColor: 'transparent'
            }
          }}
          aria-label="basic tabs example"
        >
          <Tab label="Uploaded" {...a11yProps(0)} />
          <Tab label="Edited" {...a11yProps(1)} />
        </Tabs>
      </Box>
    </Grid>
  );
}

export default PageSubHeader;
