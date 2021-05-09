import * as React from 'react';

export const Blog = () => (
  <div id='blog'>
    <h2 id='blogHead'>Blog</h2>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 8</h3>
      <p className='blogEntry'>
        Even less time today! Made sure to add something even though I really
        didn't have any time, so now there's an about me section with no info
        about me! Very exciting. Will update with my "personal narrative"
        tomorrow, or whenever I figure out my personal narrative...
      </p>
    </div>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 7</h3>
      <p className='blogEntry'>
        Today I didn't have a ton of time for coding, so I mostly just cleaned
        up some css and changed some styles around. Added a container for the
        blog entries so that I can style them better and keep them self
        contained as well. Hopefully I'll have more time this weekend to get
        some real work done on this (and maybe some other projects as well!).
      </p>
    </div>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 6</h3>
      <p className='blogEntry'>
        Not as much time today, but I did manage to actually use a hook and run
        into some issues with typescript! Figuring out both of them at the same
        time was admittedly a little confusing. Like most bugs though, I
        realized I was just doing a silly thing wrong - using const instead of
        type.
        <br />
        <br />
        I'm sure if I'd spent even one day working with just typescript before
        trying to put it in a project with another piece of tech I'd never used
        before (hooks), I probably wouldn't have had any problems. There just
        ends up being so many places the bug could be originating from that it
        becomes difficult to find the problem when it doesn't match any patterns
        or issues you've had before.
        <br />
        <br />
        Anyway, Now there is a new tab -In Progress Projects- where I will be
        showcasing some of my less complete/less fancy projects. Hopefully it is
        an interesting tab with some worthwhile content, we'll see as things go
        on I guess!
      </p>
    </div>
    <div className='blogEntry'>
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
      </p>
      <ul>
        <li>About Me</li>
        <li>Style</li>
        <li>Games</li>
        <li>Easter Eggs</li>
      </ul>
      <p>
        It does seem like I'm coming up with ideas better as I go rather than
        trying to find the ideas in advance, so I plan to keep working and
        thinking through the design as I go.
      </p>
    </div>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 4</h3>
      <p className='blogEntry'>
        I've decided that I'm going to do a sort of blog, hopefully daily, to
        write up what I am and have been working on. I've been meaning to start
        this for a few weeks, but have had a hard time pulling myself from the
        actual work of coding to make it happen. Also I'm working full time, so
        finding time to code is already difficult.
        <br />
        <br />
        I just went through the process of changing this website to use
        Typescript, and also restructured the React Component's to use hooks as
        well. So far, I haven't really used either, but having the set up behind
        me makes it a lot less daunting to get started working with those tools.
        I was surprised at the issues I ran into when trying to get started with
        Typescript with React, but I think the main issue was caused by me using
        a tutorial instead of just going directly to the docs myself. It's a
        lesson I've learned before, and I'm sure I will learn again in the
        future. It would have also helped me learn better to do it myself next
        time without "help".
        <br />
        <br />
        Anyway, we'll see where this blog style thing goes, but at the very
        least, it will be interesting to see how the website (and my other
        projects) change over time!
      </p>
    </div>
  </div>
);
