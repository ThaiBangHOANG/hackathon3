import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { logoutUser } from '../reducers/userReducer';
import { notify } from '../reducers/notificationReducer';
import MobileUserMenu from './MobileUserMenu';
import DesktopUserMenu from './DesktopUserMenu';
import SearchBar from './SearchBar';

import {
  AppBar,
  Toolbar,
  Button,
  useMediaQuery,
  IconButton,
} from '@material-ui/core';
import { useNavStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const NavBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useNavStyles();

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(notify(`u/${user.username} logged out`, 'success'));
  };

  return (
    <AppBar position='sticky' color='inherit' elevation={1}>
      <Toolbar disableGutters={isMobile}>
        {!searchOpen && (
          <>
            <div className={classes.leftPortion}>
              <div className={classes.logoWrapper}>
                <Button
                  color='primary'
                  component={RouterLink}
                  to='/'
                  size='large'
                >
                  <img
                    src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/09/fiverr-2018.png'
                    alt=' red it'
                    style={{
                      width: '40px',
                      height: '40px',
                      marginRight: '10px',
                      borderRadius: '100%',
                    }}
                  />
                  Fiverr
                </Button>
              </div>
              {!isMobile && <SearchBar />}
            </div>
            {isMobile ? (
              <>
                <IconButton
                  color='primary'
                  className={classes.searchBtn}
                  onClick={() => setSearchOpen((prevState) => !prevState)}
                >
                  <SearchIcon />
                </IconButton>
                <MobileUserMenu user={user} handleLogout={handleLogout} />
              </>
            ) : (
              <DesktopUserMenu user={user} handleLogout={handleLogout} />
            )}
          </>
        )}
        {searchOpen && isMobile && (
          <SearchBar isMobile={true} setSearchOpen={setSearchOpen} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
