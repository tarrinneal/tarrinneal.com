import * as React from 'react';
import { GrLinkedin } from 'react-icons/gr';

export const Header = () => (
  <div id='header'>
    <h1 id='headerText'>This is Tarrin Neal's website! Please hire him!</h1>
    <div id='icons'>
      <a
        href='https://www.linkedin.com/in/tarrinneal/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <GrLinkedin id='linkedInIcon' className='icon' />
      </a>
    </div>
  </div>
);
