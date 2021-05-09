import * as React from 'react';
import { useState } from 'react';
import { Header } from './Header';
import { RightSidebar } from './RightSidebar';
import { LeftSidebar } from './LeftSidebar';
import { AboutMe } from './AboutMe';
import { Blog } from './Blog';
import { InProgress } from './InProgress';

interface IProps {}

export const App: React.FunctionComponent<IProps> = () => {
  const [page, setPage] = useState('About Me');
  const pageSetter = (newPage: string) => {
    setPage(newPage);
  };
  return (
    <div id='page'>
      <Header />
      <div id='mainBody'>
        <LeftSidebar
          setPage={(e: any) => {
            pageSetter(e.target.innerText);
          }}
        />
        {page === 'About Me' ? (
          <AboutMe />
        ) : page === 'Blog' ? (
          <Blog />
        ) : page === 'In Progress Projects' ? (
          <InProgress />
        ) : null}
        <RightSidebar />
      </div>
      <p id='builtWith'>Built with React hooks and Typescript</p>
    </div>
  );
};
