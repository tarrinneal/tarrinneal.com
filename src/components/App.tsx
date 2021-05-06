import * as React from 'react';
import { Header } from './Header';
import { RightSidebar } from './RightSidebar';
import { LeftSidebar } from './LeftSidebar';

export const App = () => (
  <div id='page'>
    <Header />
    <div id='mainBody'>
      <LeftSidebar />
      <div id='blog'>
        <h2 id='blogHead'>Blog</h2>
        <h3 className='blogDate'>May 5</h3>
        <p className='blogEntry'>
          Day 2! Finally had some time to work on this a bit, added the sidebars
          with links to my portfolio items, the first signs of some css and
          webpage structure, and icon links to my github and linkedin.
          <br />
          <br />
          I'm still just trying to figure what I want this space to be. I
          certainly don't think blogging will end up being my big plan for it. I
          do have a short list of things I plan to add currently:
          <ul>
            <li>About Me</li>
            <li>Style</li>
            <li>Games</li>
            <li>Easter Eggs</li>
          </ul>
          It does seem like I'm coming up with ideas better as I go rather than
          trying to find the ideas in advance, so I plan to keep working and
          thinking through the design as I go.
        </p>
        <h3 className='blogDate'>May 4</h3>
        <p className='blogEntry'>
          I've decided that I'm going to do a sort of blog, hopefully daily, to
          write up what I am and have been working on. I've been meaning to
          start this for a few weeks, but have had a hard time pulling myself
          from the actual work of coding to make it happen. Also I'm working
          full time, so finding time to code is already difficult.
          <br />
          <br />
          I just went through the process of changing this website to use
          Typescript, and also restructured the React Component's to use hooks
          as well. So far, I haven't really used either, but having the set up
          behind me makes it a lot less daunting to get started working with
          those tools. I was surprised at the issues I ran into when trying to
          get started with Typescript with React, but I think the main issue I
          ran into was using a tutorial instead of just going directly to the
          docs myself. It's a lesson I've learned before, and I'm sure I will
          learn again in the future. It would have also helped me learn better
          to do it myself next time without "help".
          <br />
          <br />
          Anyway, we'll see where this blog style thing goes, but at the very
          least, it will be interesting to see how the website (and my other
          projects) change over time!
        </p>
      </div>
      <RightSidebar />
    </div>
    <p id='builtWith'>Built with React hooks and Typescript</p>
  </div>
);
