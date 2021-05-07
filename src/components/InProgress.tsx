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
    <p className='blogDescription'>
      A practice repo with all practice problems from the book Cracking the
      Coding Interview, with hints, solutions, and tests for every problem
    </p>
  </div>
);
