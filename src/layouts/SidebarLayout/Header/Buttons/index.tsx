import { Box, Button, Link, Typography, styled } from '@mui/material';

import CloudUploadSharpIcon from '@mui/icons-material/CloudUploadSharp';

import HeaderSearch from './Search';
import HeaderNotifications from './Notifications';

function HeaderButtons() {
  return (
    <Box sx={{ mr: 1 }}>
      {/* <HeaderSearch /> */}
      <Box sx={{ mx: 0.5 }} component="span">
        {/* <HeaderNotifications /> */}
        <Button
          // rel="noopener noreferrer"
          sx={{ mt: { xs: 2, md: 0 }, background: '#4D9900' }}
          variant="contained"
          startIcon={<CloudUploadSharpIcon fontSize="small" />}
        >
          Uploads
        </Button>
      </Box>
    </Box>
  );
}

export default HeaderButtons;
