import React from 'react';
import { ReactComponent as Best } from '../svg/best.svg';
import { ReactComponent as Hot } from '../svg/hot.svg';
import { ReactComponent as Controversial } from '../svg/controversial.svg';
import { ReactComponent as Old } from '../svg/old.svg';
import { ReactComponent as Subscribed } from '../svg/subscribed.svg';

import { Paper, Tabs, Tab, SvgIcon } from '@material-ui/core';
import { useSortTabStyles } from '../styles/muiStyles';

const SortTabBar = ({ sortBy, handleTabChange, subscribedTab, user }) => {
  const classes = useSortTabStyles();

  return (
    <Paper
      variant='outlined'
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        margin: '20px',
      }}
      className={classes.mainPaper}
    >
      <Tabs
        value={sortBy}
        onChange={handleTabChange}
        indicatorColor='primary'
        textColor='primary'
        variant='scrollable'
        scrollButtons='auto'
      >
        <Tab
          icon={
            <SvgIcon fontSize='small'>
              <Hot />
            </SvgIcon>
          }
          label='Project'
          value='Project'
        />
        <Tab
          icon={
            <SvgIcon fontSize='small'>
              <Best />
            </SvgIcon>
          }
          label='History'
          value='History'
        />
        <Tab
          icon={
            <SvgIcon fontSize='small'>
              <Controversial />
            </SvgIcon>
          }
          label='Tchat'
          value='Tchat'
        />
        <Tab
          style={{ display: 'none' }}
          icon={
            <SvgIcon fontSize='small'>
              <Old />
            </SvgIcon>
          }
          label='Old'
          value='old'
        />
      </Tabs>
    </Paper>
  );
};

export default SortTabBar;
