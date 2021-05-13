import * as React from 'react';

export const Blog = () => (
  <div id='blog'>
    <h2 id='blogHead'>Blog</h2>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 12</h3>
      <p className='blogText'>
        I decided to stream today, and ended up going longer than expected. I
        tried to get react router set up today, but I didn't have everything set
        up correctly, and I'll need to go through the set up process again to
        make it work correctly.
      </p>
    </div>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 11</h3>
      <p className='blogText'>
        Getting the set up started for react router, hoping to get that all set
        up on my day off tomorrow, we'll see. Didn't end up having much time to
        actually code after work today. Gonna have to make up for it tomorrow :)
      </p>
    </div>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 10</h3>
      <p className='blogText'>
        Decided a day off was well deserved, also need time to think of what to
        do next.
      </p>
    </div>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 9</h3>
      <p className='blogText'>
        Added some more apps I've made (mostly really old stuff, so not anything
        too fancy), and fixed some small css issues, but not a ton of work went
        into the website today. I did a lot of good work in the Cracking the
        Coding Interview practice repo, added all of the chapter 4 problems,
        solutions, hints, and jest tests.
        <br />
        <br />A decent idea for an app came out of a conversation with my fiance
        as well, an auto class maker for group x classes. Would give me some
        solid practice at system design, and also be really helpful for her, and
        hopefully other exercise instructors too.
      </p>
    </div>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 8</h3>
      <p className='blogText'>
        Even less time today! Made sure to add something even though I really
        didn't have any time, so now there's an about me section with no info
        about me! Very exciting. Will update with my "personal narrative"
        tomorrow, or whenever I figure out my personal narrative...
      </p>
    </div>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 7</h3>
      <p className='blogText'>
        Today I didn't have a ton of time for coding, so I mostly just cleaned
        up some css and changed some styles around. Added a container for the
        blog entries so that I can style them better and keep them self
        contained as well. Hopefully I'll have more time this weekend to get
        some real work done on this (and maybe some other projects as well!).
      </p>
    </div>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 6</h3>
      <p className='blogText'>
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
      <p className='blogText'>
        Day 2! Finally had some time to work on this a bit, added the sidebars
        with links to my portfolio items, the first signs of some css and
        webpage structure, and icon links to my github and linkedin.
        <br />
        <br />
        I'm still just trying to figure what I want this space to be. I
        certainly don't think blogging will end up being my big plan for it. I
        do have a short list of things I plan to add currently:
      </p>
      <ul className='blogText'>
        <li>About Me</li>
        <li>Style</li>
        <li>Games</li>
        <li>Easter Eggs</li>
      </ul>
      <p className='blogText'>
        It does seem like I'm coming up with ideas better as I go rather than
        trying to find the ideas in advance, so I plan to keep working and
        thinking through the design as I go.
      </p>
    </div>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 4</h3>
      <p className='blogText'>
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
