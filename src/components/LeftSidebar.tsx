import * as React from 'react';
import { useHistory } from 'react-router-dom';

type LeftSidebarProps = {
  setPage: any;
};

export const LeftSidebar: React.FunctionComponent<LeftSidebarProps> = ({
  setPage,
}) => (
  <div id='leftSidebar'>
    <h2 id='featureNavigation'>Features</h2>
    <h3 className='featureNavigator' onClick={setPage}>
      About Me
    </h3>
    <p className='featureDescription'>Where I discuss what I am</p>
    <h3 className='featureNavigator' onClick={setPage}>
      Blog
    </h3>
    <p className='featureDescription'>Where I write what I'm doing</p>
    <h3 className='featureNavigator' onClick={setPage}>
      In Progress Projects
    </h3>
    <p className='featureDescription'>Where I link to what I'm working on</p>
  </div>
);
