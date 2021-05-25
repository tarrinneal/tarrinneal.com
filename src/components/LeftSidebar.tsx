import * as React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

type LeftSidebarProps = {};

export const LeftSidebar: React.FunctionComponent<LeftSidebarProps> = ({}) => {
  let history = useHistory();
  return (
    <div id='leftSidebar'>
      <h2 id='featureNavigation'>Features</h2>
      <h3
        className='featureNavigator'
        onClick={() => {
          history.push('/');
        }}
      >
        About Me
      </h3>
      <p className='featureDescription'>Where I discuss what I am</p>
      <h3
        className='featureNavigator'
        onClick={() => {
          history.push('/Blog');
        }}
      >
        Blog
      </h3>
      <p className='featureDescription'>Where I write what I'm doing</p>
      <h3
        className='featureNavigator'
        onClick={() => {
          history.push('/InProgressProjects');
        }}
      >
        In Progress Projects
      </h3>
      <p className='featureDescription'>Where I link to what I'm working on</p>
    </div>
  );
};
