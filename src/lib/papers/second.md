---
title: My Second Post
description: second post description
date: '2023-07-25'
tags: ['Svelte', 'Mdsvex', 'Markdown']
published: true
url: 'https://www.oluwatimilehinawoniyi.com/second'
keywords: ''
image: ''
---

## Second post

Media inside the **static** folder is served from '/'.


![Svelte](favicon.png)


# Understanding JavaScript Closures

JavaScript closures are an important concept for any developer to understand. They allow for the creation of functions that have access to variables from another function's scope.

## What is a Closure?

A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

### Example of a Closure

```javascript
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3