import * as React from 'react';
import { App } from './App';

export const RightSidebar = () => {
  const [recurse, setRecurse] = React.useState(false);
  return (
    <div id='rightSidebar'>
      <h2 id='portfolioHeader'>Portfolio</h2>
      <a
        href='https://pacificmicroph.one'
        target='_blank'
        rel='noopener noreferrer'
      >
        <h3 className='portfolioName'>Pacific Microphone</h3>
      </a>
      <p className='portfolioDescription'>App For Actors</p>
      <a
        href='https://fec-hopper.herokuapp.com'
        target='_blank'
        rel='noopener noreferrer'
      >
        <h3 className='portfolioName'>Hopr</h3>
      </a>
      <p className='portfolioDescription'>Ecommerce Front End</p>
      <h3 className='portfolioName'>Lily Pad</h3>
      <p className='portfolioDescription'>Ecommerce Back End Redesign</p>
      <a
        href='https://triple-triad-mvp.herokuapp.com/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <h3 className='portfolioName'>Triple Triad</h3>
      </a>
      <p className='portfolioDescription'>
        Remade Final Fantasy VIII Card Game
      </p>
      <h3
        className='portfolioName recurse'
        onClick={() => {
          setRecurse(!recurse);
        }}
      >
        Tarrinneal.com
      </h3>
      <p className='portfolioDescription'>This Website!</p>
      {recurse ? <App /> : null}
    </div>
  );
};
