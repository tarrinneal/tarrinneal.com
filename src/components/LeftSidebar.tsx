import * as React from 'react';

type LeftSidebarProps = {
  navigate: any;
};

export const LeftSidebar: React.FunctionComponent<LeftSidebarProps> = ({
  navigate,
}) => (
  <div id='leftSidebar'>
    <h2 id='featureNavigation'>Features</h2>
    <h3
      className='featureNavigator'
      onClick={() => {
        navigate('/');
      }}
    >
      About Me
    </h3>
    <p className='featureDescription'>Where I discuss what I am</p>
    <h3
      className='featureNavigator'
      onClick={() => {
        navigate('/Blog');
      }}
    >
      Blog
    </h3>
    <p className='featureDescription'>Where I write what I'm doing</p>
    <h3
      className='featureNavigator'
      onClick={() => {
        navigate('/InProgressProjects');
      }}
    >
      In Progress Projects
    </h3>
    <p className='featureDescription'>Where I link to what I'm working on</p>
  </div>
);
