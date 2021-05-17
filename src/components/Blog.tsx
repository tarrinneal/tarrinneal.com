import * as React from 'react';

export const Blog = () => (
  <div id='blog'>
    <h2 id='blogHead'>Blog</h2>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 16</h3>
      <p className='blogText'>
        What a day...
        <br />
        <br />
        Thought I'd "finish up" this website for a bit by adding ssl. I've done
        that before and didn't think it would take much. Turns out, my router
        has some problems with forwarding port 443. I won't go in to the
        details, since it isn't REALLY related to software engineering, but I
        did get it working after a few hours and a hard reset of the router. So
        now you can read this blog in a secure manner!
        <br />
        <br />
        After that I added all of chapter 5 to the Cracking the Coding Interview
        paractice repo so that it would be available for everyone to use in the
        book club this week! Tomorrow (if I have time), I may get some work in
        on the Triple Triad game, to add multiplayer via socket.io!
        <br />
        <br />
        Part 2,
        <br />
        <br />
        I realized there was an issue with my implementation of React Router, I
        was adding to the history every time the app was rerendered. This
        resulted in the history getting 2 or 3 additions per load instead of
        just the 1 it needed.
        <br />
        <br />I had used a bit of a hacky solution to implement it originally,
        since I was trying to add it to the pre-existing page system I had
        created. I just needed to remove all the extra hooks from the process
        and just use the history.push method in the onClick method that was
        being used in the left sidebar to change pages. Everything is working
        correctly now!
      </p>
    </div>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 15</h3>
      <p className='blogText'>
        Touched up yesterdays work a bit, didn't have time for much beyond that.
      </p>
    </div>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 14</h3>
      <p className='blogText'>
        That didn't end up being too difficult either, added endpoints on the
        server back end to respond with the correct files for the style sheet
        and the bundle, then routed all other endpoints to return the index.html
        file to avoid the server failing to return anything when attempting to
        go directly to the website with an endpoint (like Blog or AboutMe). This
        fixed the problem with one error, but I still always ended up going to
        the same default page. The solution for that was rather simple too, I
        figured it would be a built in method for react router (and it probably
        is), but I ended up just pulling the endpoint from the window directly
        and pushing that to the history object. Now I just need a splash page
        for endpoints that dont exist to avoid sending back a blank page.
      </p>
    </div>
    <div className='blogEntry'>
      <h3 className='blogDate'>May 13</h3>
      <p className='blogText'>
        Managed to get the React Router working today, turns out the issue I
        thought was going to take a long time to fix was a rather simple issue
        of adding the router to a the component above App. Once I added it
        there, useHistory was no longer returning undefined, which made it so
        the use history hook was working correctly.
        <br />
        <br />
        There is still a minor issue with refreshing not working properly, the
        endpoints dont work on initial load. I'm sure that won't take long to
        fix, but I don't have time tonight, so I will get on it tomorrow!
      </p>
    </div>
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
