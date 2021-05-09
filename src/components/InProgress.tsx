import * as React from 'react';

export const InProgress = () => (
  <div id='inProgress'>
    <h2 className='inProgressHeader'>Projects I'm Actively Building</h2>
    <a
      href='https://github.com/tarrinneal/CtCI_Book_Club'
      target='_blank'
      rel='noopener noreferrer'
    >
      <h3 className='inProgressTitle'>
        Cracking the Coding Interview Practice Repo
      </h3>
    </a>
    <p className='inProgressDescription'>
      A practice repo with all practice problems from the book Cracking the
      Coding Interview, with hints, solutions, and tests for every problem
    </p>
    <a
      href='https://bad-libs.herokuapp.com/'
      target='_blank'
      rel='noopener noreferrer'
    >
      <h3 className='inProgressTitle'>Ad Lib Builder</h3>
    </a>
    <p className='inProgressDescription'>
      A wep app that allows users to create and upload new Ad Lib's as well as
      create stories using others uploaded Ad Libs's!
    </p>
    <a
      href='https://lil-buds.herokuapp.com/'
      target='_blank'
      rel='noopener noreferrer'
    >
      <h3 className='inProgressTitle'>Lil Buds</h3>
    </a>
    <p className='inProgressDescription'>
      A pokemon style battler with some of my classmates pets! Custom recorded
      sfx, animations and stats for every move and 'bud'. Built with Jquery and
      Css.
    </p>
    <a
      href='https://bar-gle-cade.herokuapp.com/'
      target='_blank'
      rel='noopener noreferrer'
    >
      <h3 className='inProgressTitle'>Arcade</h3>
    </a>
    <p className='inProgressDescription'>
      Some old games I made when I was first learning JS basics.
    </p>
  </div>
);
