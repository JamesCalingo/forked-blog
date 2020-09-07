---
title: Todaybor day is 
subtitle: Labor Dabor
published: true
datePublished: 1599512692000
author: 
tags:
authorPhoto: 
bannerPhoto:
thumbnailPhoto: 
canonicalUrl: https://jamescalingo.com/blog/til2
---
(Yes, that is a reference to what you think it is. I’ve been using the internet since 2000, so…)

Today, I learned quite a bit about something called “Regular Expression”, henceforth known as regex.

Regex is a powerful tool that lets programmers dive into the code, find certain strings/substrings, and then manipulate them to fit whatever needs exist. I know this sounds like a bunch of technical jargon, and it kinda is, but let’s look at an example.

Say you have the sentence
“Peter Piper picked a peck of pickled peppers and proceeded to open and operate Peter Piper’s Pickled Peppers, Pizza, and Pastrami on Pattison Avenue in Philadelphia, Pennsylvania.”

And you want to see how many times the letter p shows up (a lot).

With regex, you can search through this sentence to find all the ps and count them. all you do is:

```
let sentence = “Peter Piper picked a peck of pickled peppers and proceeded to open and operate Peter Piper’s Pickled Peppers, Pizza, and Pastrami on Pattison Avenue in Philadelphia, Pennsylvania.”
let findP = /p/ig;
let result = sentence.match(findP);
console.log(result.length);
```

and you end up with a whopping 25 P’s.

So what exactly is going on here? The “magic” is in the thing called findP. Before you ask, “findP” is just the name I gave it.

/p/ doesn’t mean 4chan’s photography board (which is, coincidentally, one of the least concerning things on 4chan), it represents the thing we are looking for (in this case, the letter p). If we wanted to look for something else (like, say, Peter), we could put /Peter/ in this field.

the “ig” at the end is for two different things and they’re both important:


- the “g” lets findP run through the whole sentence. Without it, only the first p in the sentence will be found and counted.
- the i stands for “ignore case”. Normally, upper case P and lower case p are two different things altogether; this lets us group all p’s together regardless of case.

.match(findP) means to run a scan through the sentence, find all of the p’s, and log them. the “result” is just all of the p’s thrown into what’s known as an array, so we use the .length method to get the actual number of p’s - 25.

…There’s a lot more to regex than this, but here’s just a basic example. After all, I am still trying to understand it better…