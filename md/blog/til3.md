---
title: This is how we overcome
subtitle: Bringing an old idea into the present - just in time for it to not be useful
published: true
datePublished: 1599686581000
author: 
tags:
authorPhoto: 
bannerPhoto:
thumbnailPhoto: 
canonicalUrl: https://jamescalingo.com/blog/til3
---
Gonna be honest: not sure how long I can keep these up. I’ll try my best with them, but I don’t know if I’ll be able to cause I’m trying to move towards getting a job fast, and at times these posts get in the way of that.

Part of that is because I thought I’d be learning about coding stuff, but that may not exactly be the case in the near future. However, today I do have something “fun” for you all:

Like most kids of the 90s, I played a bunch of video games growing up. Being young, dumb, easily frustrated, and bad at video games, however, caused me to not beat a lot of them until I was MUCH older.

Why am I bringing this up?

Because…<a href="https://jamescalingo.dev/passnplaygames/" target="blank">this</a>.

This is an app born from me not wanting to have created 13 repositories in one month (weird, I know). I created the repository without an idea of what it would be, and then came up with this idea one day while “working” on something similar (more on that soon).

It’s a way to give out Mafia/Werewolf roles to people who are in a single room together. Whoever is the moderator tells the app how many people are playing and what their roles are, and then the device running the app gets passed around while everyone learns their role.

However…I ran into an issue that caused me to stop working on it for a while.

Y’see, there’s a page in which you create a bunch of data, and it gets stored in something called an array. The goal was that as the device was being passed around, the app would give each person a role from the array until all roles had been given out and the array was empty.

However, what ended up happening is that when data needed to be pulled from the array, the array was already empty. Therefore, the app couldn’t run.

I forget exactly what I did, but testing showed that if the array HAD the correct data, it would run smoothly. I was so close, and yet this one persistent bug that I couldn’t figure out caused me so much frustration and headaches. I ended up leaving this project alone for MONTHS until I decided to come back to it and see if I could figure out a way to solve the problem. I felt that finishing it would be a great way to prove to myself (and any future recruiters/employers) that I can do this whole programming thing.

Today, I relearned the power of Template Literal.

Template Literal is a relatively new type of JavaScript string (basically how JavaScript handles sentences). It allows for much more dynamic things to be done with strings (including sticking variables into them). I know most of you non-developers have no clue what’s going on, but trust me when I say it’s a really useful tool.

I realized then that the issue I was having was that the page to display the roles did not have the correct array due to it being a different html file altogether, so I had to figure out a way to get the proper array to the display role page. I thought about using session storage, but I wasn’t going to try and be the first person to figure out how to use storage to pull random values out of an array when they only handle strings!

That’s when I decided: What if, instead of trying to use multiple pages to run this app, I just used one instead?

Using template literal, I copied the code from the player display html file and made it so that once the game was set up, it would display on the same html document as the setup. It worked like a charm, and now, the app is done and ready…just in time for no one to be able to use it within reason!

Someday, though…

(P.S.:Any savvy fellow developers may have noticed that the major frameworks for single page applications (i.e. React and Angular) were not involved with this project. That’s mainly because I was just trying to get something out of this, and GitHub pages doesn’t like frameworks.

I DO have plans for a React version of this app, though…sorta. I say that because it’ll still be Mafia/Fake Artist, but with an entirely different system of distributing roles… 

Also, <a href="https://github.com/JamesCalingo/passnplaygames" target="blank">here’s the GitHub repo if you’re interested</a>. I plan on doing this if I ever mention an app I made here so that you can see what I did, since that may help you with your projects. You’re also welcome to tell me that the code is terrible and I should feel bad, but remember: I was just out of Bootcamp when making this.)