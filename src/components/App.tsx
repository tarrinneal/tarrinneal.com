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
  const [page, setPage] = useState('AboutMe');
  const pageSetter = (newPage: string) => {
    setPage(newPage);
  };
  let history = useHistory();
  history.push('/' + page);

  return (
    <div id='page'>
      <Header />
      <div id='mainBody'>
        <LeftSidebar setPage={pageSetter} />
        <Switch>
          <Route path='/AboutMe'>
            <AboutMe />
          </Route>
          <Route path='/InProgressProjects'>
            <InProgress />
          </Route>
          <Route path='/Blog'>
            <Blog />
          </Route>
        </Switch>
        {/* {page === 'About Me' ? (
          <AboutMe />
        ) : page === 'Blog' ? (
          <Blog />
        ) : page === 'In Progress Projects' ? (
          <InProgress />
        ) : null} */}
        <RightSidebar />
      </div>
      <p id='builtWith'>Built with React hooks and Typescript</p>
    </div>
  );
};
