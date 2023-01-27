import { useContext } from 'react';

import {
  ListSubheader,
  alpha,
  Box,
  List,
  styled,
  Button,
  ListItem,
  Divider
} from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';

import { useNavigate } from 'react-router-dom';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};fontFamily: 'InterRegular';

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(
    1
  )};fontFamily: 'InterRegular';
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: #009111;
      // color: ${theme.colors.alpha.trueWhite[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;fontFamily: 'InterRegular';
    }
`
);

const SubMenuWrapper = styled(Box)(
  ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;fontFamily: 'InterRegular';

        .MuiBadge-root {
          position: absolute;fontFamily: 'InterRegular';
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;fontFamily: 'InterRegular';
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          // color: ${theme.colors.alpha.trueWhite[70]};
          color: #333333;
          // #009111
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};fontFamily: 'InterRegular';

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;fontFamily: 'InterRegular';
            }
          }

          .MuiButton-startIcon {
            // color: ${theme.colors.alpha.trueWhite[30]};
            // color: #009111;
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};fontFamily: 'InterRegular';
          }
          
          .MuiButton-endIcon {
            // color: ${theme.colors.alpha.trueWhite[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
            fontFamily: 'InterRegular';
          }

          &.active,
          &:hover {
            // background-color: ${alpha(
              theme.colors.alpha.trueWhite[100],
              0.06
            )};
            // color: ${theme.colors.alpha.trueWhite[100]};
            color: #009111;
            fontFamily: 'InterRegular';
            .MuiButton-startIcon,
            .MuiButton-endIcon {
              // color: ${theme.colors.alpha.trueWhite[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;
          fontFamily: 'InterRegular';
          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;
          fontFamily: 'InterRegular';
          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
            fontFamily: 'InterRegular';
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};
              fontFamily: 'InterRegular';
              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                // background: ${theme.colors.alpha.trueWhite[100]};
                opacity: 0;
                transition: ${theme.transitions.create([
                  'transform',
                  'opacity'
                ])};
                width: 6px;
                fontFamily: 'InterRegular';
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);fontFamily: 'InterRegular';
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
  const { closeSidebar } = useContext(SidebarContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/auth');
  };

  return (
    <>
      <MenuWrapper
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* remove */}
        {/* <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/overview"
                  startIcon={<DesignServicesTwoToneIcon />}
                >
                  Overview
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List> */}
        {/* remove */}

        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/dashboards/home"
                  startIcon={<HomeOutlinedIcon fontSize="large" />}
                >
                  Home
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/404" ///dashboards/crypto
                  startIcon={<AppsOutlinedIcon fontSize="large" />}
                >
                  Collages
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/404" ///dashboards/messenger
                  startIcon={<GroupOutlinedIcon fontSize="large" />}
                >
                  Employees
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/404" ///dashboards/messenger
                  startIcon={<SettingsOutlinedIcon fontSize="large" />}
                >
                  Settings
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        <List component="div">
          <Divider
            variant="fullWidth"
            sx={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#25311C'
            }}
          />

          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div" sx={{ my: 2 }}>
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/404" ///management/transactions
                  startIcon={<TableChartTwoToneIcon />}
                >
                  John K.
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
          <Divider
            variant="fullWidth"
            sx={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: '#25311C'
            }}
          />
        </List>

        {/* remove */}

        {/* <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Accounts
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/profile/details"
                  startIcon={<AccountCircleTwoToneIcon />}
                >
                  User Profile
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/profile/settings"
                  startIcon={<DisplaySettingsTwoToneIcon />}
                >
                  Account Settings
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List> */}
        {/* remove */}

        {/* <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Components
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/buttons"
                  startIcon={<BallotTwoToneIcon />}
                >
                  Buttons
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/modals"
                  startIcon={<BeachAccessTwoToneIcon />}
                >
                  Modals
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/accordions"
                  startIcon={<EmojiEventsTwoToneIcon />}
                >
                  Accordions
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/tabs"
                  startIcon={<FilterVintageTwoToneIcon />}
                >
                  Tabs
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/badges"
                  startIcon={<HowToVoteTwoToneIcon />}
                >
                  Badges
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/tooltips"
                  startIcon={<LocalPharmacyTwoToneIcon />}
                >
                  Tooltips
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/avatars"
                  startIcon={<RedeemTwoToneIcon />}
                >
                  Avatars
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/cards"
                  startIcon={<SettingsTwoToneIcon />}
                >
                  Cards
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/forms"
                  startIcon={<TrafficTwoToneIcon />}
                >
                  Forms
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List> */}
        {/* remove */}

        <List
          component="div"
          // subheader={
          //   <ListSubheader component="div" disableSticky>
          //     Extra Pages
          //   </ListSubheader>
          // }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/404"
                  startIcon={<DeleteIcon fontSize="medium" />}
                >
                  Delete Account
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={handleLogout}
                  to="/status/500"
                  startIcon={<LogoutIcon fontSize="medium" />}
                >
                  Log Out
                </Button>
              </ListItem>
              {/* <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/coming-soon"
                  startIcon={<ChromeReaderModeTwoToneIcon />}
                >
                  Coming Soon
                </Button>
              </ListItem> */}
              {/* <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/maintenance"
                  startIcon={<WorkspacePremiumTwoToneIcon />}
                >
                  Maintenance
                </Button>
              </ListItem> */}
            </List>
          </SubMenuWrapper>
        </List>
      </MenuWrapper>
    </>
  );
}

export default SidebarMenu;
