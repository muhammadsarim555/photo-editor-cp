import React, { useState } from 'react';

import { Tab, Tabs, Avatar } from '@mui/material';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PageSubHeader from 'src/content/pages/Components/SubHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export default function PrivacyPolicy() {
  const [value, setValue] = useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title>GFP - Privacy Policy</title>
      </Helmet>
      <CssBaseline />

      {/* End hero unit */}

      <Box>
        <Grid md={12} sx={{ padding: 2, boxShadow: 3, background: 'white' }}>
          <Box
            sx={{
              marginLeft: 15
            }}
          >
            <Avatar
              variant="rounded"
              sx={{
                width: 50,
                height: 50
              }}
              alt="Zain Baptista"
              src="/static/images/logo/logo.svg"
            />
          </Box>
        </Grid>
        <PageTitleWrapper>
          <Grid
            container
            sx={{ background: 'white' }}
            justifyContent="center"
            alignItems="center"
            marginTop={1}
          >
            <Grid
              item
              md={6}
              sx={{
                marginLeft: 10
              }}
            >
              <Typography
                variant="h6"
                component="h6"
                gutterBottom
                sx={{ color: '#519900' }}
              >
                Current as of 20 Jan 2022
              </Typography>
              <Typography variant="h2" component="h2" gutterBottom>
                Privacy Policy
              </Typography>

              <Box sx={{ width: '100%', mt: 6, mb: 3 }}>
                <Tabs
                  variant="scrollable"
                  scrollButtons="auto"
                  //   indicatorColor='red'
                  //   textColor=""
                  //   indicatorColor="secondary"
                  value={value}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: '#519900',
                      borderColor: 'transparent'
                    }
                  }}
                  aria-label="basic tabs example"
                >
                  <Tab label="Human-friendly" {...a11yProps(0)} />
                  <Tab label="Legal nonsense" {...a11yProps(1)} />
                </Tabs>
              </Box>

              {/* <Typography variant="subtitle2">
          {user.name}, these are your recent transactions
        </Typography> */}
            </Grid>
            <Grid item md={4}>
              <Typography variant="h6">
                By accessing our website, you are agreeing to be bound by these
                terms of service, and agree that you are responsible for
                compliance with any applicable local laws.
              </Typography>
            </Grid>
          </Grid>

          {/* <PageSubHeader heading={'Terms and Conditions'} /> */}
        </PageTitleWrapper>

        <Container sx={{ py: 3, mt: 3, background: 'white' }} maxWidth="md">
          <Grid container spacing={6}>
            <Grid item md={8}>
              <Typography variant="h6">
                Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
                suspendisse morbi eleifend faucibus eget vestibulum felis.
                Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam.
                Mauris posuere vulputate arcu amet, vitae nisi, tellus
                tincidunt. At feugiat sapien varius id. Eget quis mi enim, leo
                lacinia pharetra, semper. Eget in volutpat mollis at volutpat
                lectus velit, sed auctor. Porttitor fames arcu quis fusce augue
                enim. Quis at habitant diam at. Suscipit tristique risus, at
                donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet
                sodales id est ac volutpat.
              </Typography>

              <Box sx={{ py: 6 }}>
                <Typography variant="h3">
                  What information do we collect?
                </Typography>

                <Typography variant="h6" sx={{ py: 2 }}>
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                  nulla odio nisl vitae. In aliquet pellentesque aenean hac
                  vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                  vitae malesuada fringilla. Elit nisi in eleifend sed nisi.
                  Pulvinar at orci, proin imperdiet commodo consectetur
                  convallis risus. Sed condimentum enim dignissim adipiscing
                  faucibus consequat, urna. Viverra purus et erat auctor
                  aliquam. Risus, volutpat vulputate posuere purus sit congue
                  convallis aliquet. Arcu id augue ut feugiat donec porttitor
                  neque. Mauris, neque ultricies eu vestibulum, bibendum quam
                  lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra,
                  porttitor. Ipsum sit mattis nulla quam nulla. Gravida id
                  gravida ac enim mauris id. Non pellentesque congue eget
                  consectetur turpis. Sapien, dictum molestie sem tempor. Diam
                  elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor
                  tellus. Sed vel, congue felis elit erat nam nibh orci.
                </Typography>
              </Box>

              <Box sx={{ py: 6 }}>
                <Typography variant="h3">
                  How do we use your information?
                </Typography>

                <Typography variant="h6" sx={{ py: 2 }}>
                  Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum,
                  nulla odio nisl vitae. In aliquet pellentesque aenean hac
                  vestibulum turpis mi bibendum diam. Tempor integer aliquam in
                  vitae malesuada fringilla. Elit nisi in eleifend sed nisi.
                  Pulvinar at orci, proin imperdiet commodo consectetur
                  convallis risus. Sed condimentum enim dignissim adipiscing
                  faucibus consequat, urna. Viverra purus et erat auctor
                  aliquam. Risus, volutpat vulputate posuere purus sit congue
                  convallis aliquet. Arcu id augue ut feugiat donec porttitor
                  neque. Mauris, neque ultricies eu vestibulum, bibendum quam
                  lorem id. Dolor lacus, eget nunc lectus in tellus, pharetra,
                  porttitor. Ipsum sit mattis nulla quam nulla. Gravida id
                  gravida ac enim mauris id. Non pellentesque congue eget
                  consectetur turpis. Sapien, dictum molestie sem tempor. Diam
                  elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor
                  tellus. Sed vel, congue felis elit erat nam nibh orci.
                </Typography>
              </Box>

              <Box sx={{ py: 6 }}>
                <Typography variant="h3">
                  Do we use cookies and other tracking technologies?
                </Typography>

                <Typography variant="h6" sx={{ py: 2 }}>
                  Pharetra morbi libero id aliquam elit massa integer tellus.
                  Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper
                  sit dictumst ut eget a, elementum eu. Maecenas est morbi
                  mattis id in ac pellentesque ac.
                </Typography>
              </Box>

              <Box sx={{ py: 6 }}>
                <Typography variant="h3">
                  How long do we keep your information?
                </Typography>

                <Typography variant="h6" sx={{ py: 2 }}>
                  Pharetra morbi libero id aliquam elit massa integer tellus.
                  Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper
                  sit dictumst ut eget a, elementum eu. Maecenas est morbi
                  mattis id in ac pellentesque ac.
                </Typography>
              </Box>

              <Box sx={{ py: 6 }}>
                <Typography variant="h3">
                  How do we keep your information safe?
                </Typography>

                <Typography variant="h6" sx={{ py: 2 }}>
                  Pharetra morbi libero id aliquam elit massa integer tellus.
                  Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper
                  sit dictumst ut eget a, elementum eu. Maecenas est morbi
                  mattis id in ac pellentesque ac.
                </Typography>
              </Box>

              <Box sx={{ py: 6 }}>
                <Typography variant="h3">
                  What are your privacy rights?
                </Typography>

                <Typography variant="h6" sx={{ py: 2 }}>
                  Pharetra morbi libero id aliquam elit massa integer tellus.
                  Quis felis aliquam ullamcorper porttitor. Pulvinar ullamcorper
                  sit dictumst ut eget a, elementum eu. Maecenas est morbi
                  mattis id in ac pellentesque ac.
                </Typography>
              </Box>

              <Box sx={{ py: 6 }}>
                <Typography variant="h3">
                  How can you contact us about this policy?
                </Typography>

                <Typography variant="h6" sx={{ py: 2 }}>
                  Sagittis et eu at elementum, quis in. Proin praesent volutpat
                  egestas sociis sit lorem nunc nunc sit. Eget diam curabitur mi
                  ac. Auctor rutrum lacus malesuada massa ornare et. Vulputate
                  consectetur ac ultrices at diam dui eget fringilla tincidunt.
                  Arcu sit dignissim massa erat cursus vulputate gravida id. Sed
                  quis auctor vulputate hac elementum gravida cursus dis. Lectus
                  id duis vitae porttitor enim gravida morbi. Eu turpis posuere
                  semper feugiat volutpat elit, ultrices suspendisse. Auctor vel
                  in vitae placerat. Suspendisse maecenas ac donec scelerisque
                  diam sed est duis purus.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Footer />
        </Container>
      </Box>
    </>
  );
}
