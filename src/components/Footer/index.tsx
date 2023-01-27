import {
  Box,
  Container,
  Link,
  Typography,
  styled,
  Button
} from '@mui/material';

import { useNavigate } from 'react-router-dom';

const FooterWrapper = styled(Container)(
  ({ theme }) => `
        margin-top: ${theme.spacing(4)};
`
);

function Footer() {
  const navigate = useNavigate();

  return (
    <FooterWrapper className="footer-wrapper">
      <Box
        pb={4}
        display={{ xs: 'block', md: 'flex' }}
        alignItems="center"
        textAlign={{ xs: 'center', md: 'left' }}
        justifyContent="space-evenly"
      >
        <Button variant="text" sx={{ textTransform: 'none' }} disabled>
          <Typography
            sx={{
              pt: { xs: 2, md: 0 },
              color: '#519900',
              fontFamily: 'InterLight'
            }}
            variant="subtitle1"
          >
            &copy; GFP 2022
          </Typography>
        </Button>

        <Button
          variant="text"
          sx={{ textTransform: 'none' }}
          onClick={() => navigate('/public/terms&Condition')}
        >
          <Typography
            sx={{
              pt: { xs: 2, md: 0 },
              color: '#519900',
              fontFamily: 'InterLight'
            }}
            variant="subtitle1"
          >
            Terms & Conditions
          </Typography>
        </Button>

        <Button
          variant="text"
          sx={{ textTransform: 'none' }}
          onClick={() => navigate('/public/PrivacyPolicy')}
        >
          <Typography
            sx={{
              pt: { xs: 2, md: 0 },
              color: '#519900',
              fontFamily: 'InterLight'
            }}
            variant="subtitle1"
          >
            Privacy Policy
          </Typography>
        </Button>
      </Box>
    </FooterWrapper>
  );
}

export default Footer;
