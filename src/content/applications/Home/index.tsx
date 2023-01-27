import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';

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
import { errorMsg, getToken } from 'src/config/helper';
import { get_photos } from 'src/config/WebServices';
import { getResource } from 'src/config/SimpleApis';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Album() {
  const [loading, setLoading] = useState(false);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    handleGetPhotos();
  }, []);

  const handleGetPhotos = async () => {
    try {
      setLoading(true);

      const token = getToken();

      const res = await getResource(get_photos, token);
      setAllImages(res);
    } catch (e) {
      errorMsg(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>GFP - Home</title>
      </Helmet>
      <CssBaseline />

      {/* End hero unit */}
      <PageTitleWrapper>
        <PageSubHeader heading={'Home'} />
      </PageTitleWrapper>

      <Container sx={{ py: 1 }} maxWidth="md">
        <Grid container spacing={6}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                elevation={0}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'transparent',
                  height: '100%'
                }}
              >
                <CardMedia
                  component="img"
                  height={250}
                  width={200}
                  sx={{
                    //   objectFit: 'contain',
                    display: 'flex'
                  }}
                  image="https://source.unsplash.com/random"
                  alt="random"
                />

                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button size="small">
                    <DriveFileRenameOutlineIcon sx={{ color: '#009111' }} />
                  </Button>
                  <Button size="small">
                    <LocalPrintshopOutlinedIcon sx={{ color: '#009111' }} />
                  </Button>
                  <Button size="small">
                    <DeleteOutlineOutlinedIcon sx={{ color: '#009111' }} />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Footer />
      </Container>
    </>
  );
}
