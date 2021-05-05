import * as React from 'react';

export const RightSidebar = () => (
  <div id='rightSidebar'>
    <h2 id='portfolioHeader'>Portfolio</h2>
    <a href='https://pacificmicroph.one'>
      <h3 className='portfolioName'>Pacific Microphone</h3>
      <p className='portfolioDescription'>App For Actors</p>
    </a>
    <a href='https://fec-hopper.herokuapp.com'>
      <h3 className='portfolioName'>Hopr</h3>
      <p className='portfolioDescription'>Ecommerce Front End</p>
    </a>
    <h3 className='portfolioName'>Lily Pad</h3>
    <p className='portfolioDescription'>Ecommerce Back End Redesign</p>
    <a href='https://triple-triad-mvp.herokuapp.com/'>
      <h3 className='portfolioName'>Triple Triad</h3>
      <p className='portfolioDescription'>
        Remade Final Fantasy VIII Card Game
      </p>
    </a>
    <h3 className='portfolioName'>Tarrinneal.com</h3>
    <p className='portfolioDescription'>This Website!</p>
  </div>
);
