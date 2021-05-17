import * as React from 'react';
import { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Header } from './Header';
import { RightSidebar } from './RightSidebar';
import { LeftSidebar } from './LeftSidebar';
import { AboutMe } from './AboutMe';
import { Blog } from './Blog';
import { InProgress } from './InProgress';

interface IProps {}

export const App: React.FunctionComponent<IProps> = () => {
  let history = useHistory();

  return (
    <div id='page'>
      <Header />
      <div id='mainBody'>
        <LeftSidebar navigate={history.push} />
        <Switch>
          <Route path='/InProgressProjects'>
            <InProgress />
          </Route>
          <Route path='/Blog'>
            <Blog />
          </Route>
          <Route path='/'>
            <AboutMe />
          </Route>
        </Switch>
        <RightSidebar />
      </div>
      <p id='builtWith'>Built with React hooks and Typescript</p>
    </div>
  );
};
