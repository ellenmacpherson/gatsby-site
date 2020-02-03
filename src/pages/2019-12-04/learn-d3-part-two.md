---
path: '/learn-d3-part-two'
date: '2019-12-04'
published: true
title: "Learn D3.js with Me: Bind Data to DOM Selections (Post #2)."
tags: ['tutorial', 'javascript', 'data', 'd3']
cover_image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'

---

Welcome to the second post in this D3.js fundamentals series - a place where we're all learning together. If you're new to this series, please see [Part 1](https://dev.to/ellen_dev/learn-d3-with-me-selecting-and-appending-elements-to-the-dom-post-1-8i3) before you keep going. 

To recap last lesson, we learned: 

- What D3 is and why you would use it. 🤔
- Setting up D3 in a new project. 👩‍💻
- How to select DOM elements using select() and selectAll(). ☝️
- How to append elements to the DOM using append(). ➕
- How to add HTML attributes to elements using attr(). ➕
- Saving selections to a variable. 💾
- Using the text() method to add text to an element. 📝

Today we'll be learning how to bind data to DOM elements. This is really the crux of D3:

> *D3 allows you to bind arbitrary data to a Document Object Model (DOM), and then apply data-driven transformations to the document.*

Binding data means later on we can eventually interactively update our charts and graphs. Exciting, right? 

Grab yourself a cup of your preferred brain-fuel and let's get going. 

## Setting up

Last time, we worked with an unordered list and appended three `li` elements to it. Our code looked like this: 

```
d3.select("body")
  .append('ul');

const ul = d3.select('ul');

ul.append('li').text('first');
ul.append('li').text('second');
ul.append('li').text('third');
```
Today, we'll be sticking with the unordered list, but we'll be dynamically generating the `li` elements. Go ahead and delete the last appending those `li` elements. 


To bind data, we first need a dataset. This can be anything. Unlike pre-built visualisation platforms, the power of D3 is that it's really up to you what data makes it into the browser and how. 

We'll explore a few different datasets later in this series, but we'll keep things simple for now with an array of numbers:

```
const dataset = [6, 18, 58, 4, 23, 10, 74, 30];
d3.select("body")
  .append('ul');

const ul = d3.select('ul');
```

Getting data to the browser in D3 works a little unconventionally. First, we have to select elements that don't exist yet. And because we have more than one number we want to deal with, we need to use the 'selectAll()' method we learned in Part 1:


```
const dataset = [6, 18, 58, 4, 23, 10, 74, 30];
d3.select("body")
  .append('ul');

const ul = d3.select('ul');

ul.selectAll('li')
```

This might seem odd, but think of it as a preparation step. It's a similar concept to declaring an empty variable in JavaScript before assigning it data in a loop.

## Binding the data

Right, time to deal with the data. To pass the dataset to d3, we need to use the `.data()` and `enter()` methods. And remember, we can chain these together.

```
const dataset = [6, 18, 58, 4, 23, 10, 74, 30];
d3.select("body")
  .append('ul');

const ul = d3.select('ul');

ul.selectAll('li')
  .data(dataset)
  .enter()
```

`data()` counts and parses our data. When we have more data in the dataset than there are DOM elements, we need to use the `enter()` method. It creates a placeholder for each extra element we need in the DOM. So right now, it's created eight placeholders for us. Later on in the series we'll have a look at the `update()` and `exit()` methods. 

If you run this code now, you won't see anything. That's because we've selected our `li` elements, but we haven't appended them. 

```
ul.selectAll('li')
  .data(dataset)
  .enter().append('li');

```

At this point, we've got eight list elements on the page. 

![Eight empty list elements](https://thepracticaldev.s3.amazonaws.com/i/xri1b0epjoa2c6x27dyc.png)

It's progress, but D3 won't automatically add the text values to the DOM because we might not always want to visualise our data that way. To get text showing up, we need to use the `text()` method we learned in the last lesson that allows you to set any text value for the elements in the DOM.

```
ul.selectAll('li')
  .data(dataset)
  .enter().append('li')
  .text('New list element!);

```

Here, we've essentially said 'append the text 'New list element!' to each `li` element we've created in the DOM. It doesn't seem very useful, but there might be a reason one day why you want a static value for each element on the page. For instance, you might have designed a visualisation simply counts how much of something there is. 

To get the the correct corresponding dataset values for each element, we'll need to do things a bit more dynamically and loop through our dataset. To do this, we use a simple function to tell D3 to show the matching value for each element. 

`function(d) {return d};`

```
ul.selectAll('li')
  .data(dataset)
  .enter().append('li')
  .text(function(d) {return d});

```

And voilà! We've got our dataset showing on the page. 


![An unordered list with all our dataset numbers in order.](https://thepracticaldev.s3.amazonaws.com/i/lf79pnk9ol0d9bjynqym.png)

It's not the most exciting output, but the building blocks of D3 are starting to take shape. Using our imagination and the lessons we've learned so far, we can start thinking about how to use functions to not only change text, but colour, shapes and animations.

## Recap 

Again, not the most exciting output, but we've learned the true building blocks of D3:

- How to bind our data to the DOM using two new methods: `data()` and `enter()`.
- How to use a function to get your dataset values visually represented in the DOM. 

Follow along next week for a crash course in SVG where we'll be making a simple bar chart. 📊 