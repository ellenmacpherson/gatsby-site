---
path: '/learn-d3-part-one'
date: '2019-11-26'
published: true
title: "Learn D3.js with Me: Selecting and Appending elements to the DOM (Post #1)."
tags: ['tutorial', ' javascript', 'data', 'd3']
cover_image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--p-U2uOal--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://thepracticaldev.s3.amazonaws.com/i/jgglq5zh4ypwq9k1jhv9.jpg'
---


Welcome to my beginners series covering D3.js fundamentals where you can learn D3 along with me! This series of blog posts will be for categorising my own learning as well as sharing knowledge with all of you. So please feel free to discuss your own tips and tricks in the comments.

##Introduction

Today we'll be covering what exactly D3.js is, why you might use it, how to set it up, and some basics on how you can use it to interact with the DOM. 

### What is D3.js? 

D3 stands for Data-Driven Documents. It's a frontend JavaScript library built for data visualisation. It leverages HTML, CSS and SVG to help you create brilliant interactive data visualisations capable of running in any browser.

### Why would I use it?

Because it's largely built around making use of CSS and SVGs, D3 is probably the most flexible tool out there for visualising data. You can make graphics as interactive or animated as you like - the only limit is your creativity. 

Mike Bostock, the creator of D3, has a *lot* of examples in this gallery on Github. 

###What should I know before I start? 

Before diving into D3, you should have a solid understanding of HTML, CSS and JavaScript basics. Some experience in jQuery isn't strictly necessary, but it could be helpful. The syntax of D3 is very similar. Finally, a basic understanding of geometry and SVGs won't steer you wrong. I'll be doing a very rudimentary crash course on creating SVGs in this series, so don't worry if it's not something that's currently in your toolbox. 

###Getting set up

The easiest way to use D3 is to use its CDN. 

Create an HTML boilerplate with a few paragraphs: 

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>D3 Fundamentals</title>
    <link rel="stylesheet" href="master.css">
    <script src="https://d3js.org/d3.v4.min.js"></script>
  </head>

  <body>
    <p>First Paragraph</p>
    <p>Second Paragraph</p>
    <p>Third Paragraph</p>
    <p>Fourth Paragraph</p>
    <p>Fifth Paragraph</p>

    <script type="text/javascript" src="index.js"></script>
  </body>
</html>
```

Make sure this script tag is pasted into the head: 

`<script src="https://d3js.org/d3.v4.min.js"></script>`

You can also download a local copy from [here](https://d3js.org) and point the script source attribute to the local path. 

Create another script tag just before the end `</body>` tag. I personally like to keep my scripts separate from my HTML code, so I've linked to an external index.js file. I'd recommend doing this as our code gets more complex. For now, however, you can write your JS in the script tag if you prefer.

## First steps: Understanding how to select and append elements in the DOM

Before we dive into making graphs, charts and maps, we should understand how to interact with the DOM. You'll largely be doing this through selecting and appending HTML elements. 

### Selecting elements

D3 allows you to select elements in two ways using: 

`d3.select()`
`d3.selectAll()`

The select methods take one parameter - the element you want to edit. This can be in the form of a tag name, a class name, or an id. 

Let's go ahead and add some very basic styling to our paragraphs so we can see the effect of using the different selection methods. Don't worry too much if you haven't seen styling done in this way before. I'll be talking more about it later.

Using `d3.select('p')` will only target the **first** paragraph element in the DOM. Note: if you want to target another one of the other paragraphs, you can use the CSS nth selector in the D3 select method. To select the third paragraph, I can run `d3.select('p:nth-child(3)')`. 

Of course, selecting an element doesn't show us anything, so let's add some styling to prove it's worked. To add styling to our selected element, we use the `style()` method. It takes two parameters: the style attribute (in this case, color), and the value (in this case, teal). D3 supports method chaining, so all we have to do is continue on the same line as our `select()` method.

Running `d3.select('p').style('colour', 'teal')` should give you the following result:

![Five paragraphs with the first one highlighted](https://thepracticaldev.s3.amazonaws.com/i/yas38gxanczq0zxwku15.png)

The `selectAll()` method, however, allows us to select all the targeted elements. 

To make all our paragraphs teal, we can run `d3.selectAll('p').style('color', 'teal')`. 

![Five paragraphs, all teal](https://thepracticaldev.s3.amazonaws.com/i/5m6u8f8gr7isxmmlya06.png)

Both methods will probably form the basis of most of the graphs you create. But we won't often be working with hard-coded elements from the DOM. It's more likely that we'll be selecting specific elements based on the data they reflect. To create those dynamically elements, we'll need to first know how to append them to the DOM from our JS file.

#Appending elements

Appending elements to the DOM will eventually allow us to dynamically create elements based on our datasets. The function we'll be using to do this is:

`d3.append()`

Let's get rid of our paragraphs for the moment so we have an empty HTML boilerplate again. First, we need to select the element we want to append something to - in this case, it's just the HTML `body`. 

Let's make a list this time. 

```

d3.select("body")
  .append('ul');

```
We can also save the `ul` element to a variable to make our lives easier when appending several `li` elements. This will be useful down the line to keep things clean when our code becomes more complex.

```
const ul = d3.select('ul');

ul.append('li')
ul.append('li')
ul.append('li')

```

At this point, you should see three bullet points. But they don't have any text - to add some, we can use the `text()` method, another handy function that we'll be using often. You can also use this to update any existing text in an element.

```
ul.append('li').text('first');
ul.append('li').text('second');
ul.append('li').text('third');

```

The end result should be this pretty boring looking list. 

![Unordered list with three child elements](https://thepracticaldev.s3.amazonaws.com/i/9rh46sn57t31894ymi0r.png)

###Adding attributes

One of the most widely-used methods in D3 is the attribute method, used to add HTML tag attributes:

`ul.attr()`

The attribute method takes two parameters: the attribute you want to add (e.g. class, id, width, height etc) and the value. 

This will come in particularly handy when we start working with SVGs and need to specify x and y attributes to our visualisations. It's also great for styling. For example, we can add a class called 'list' to our unordered list by running `ul.attr('class', 'list')`. You can then give it specific styling in a separate CSS file or select it in your JS file using `d3.select('.list')`for further editing.

## Recap

Boring as our end result might have been, we've covered some crucial first steps in learning D3: 
- What D3 is and why you would use it.
- Setting up D3 in a new project.
- How to select DOM elements using `select()` and `selectAll()`.
- How to append elements to the DOM using `append()`. 
- How to add HTML attributes to elements using `attr()`.
- Saving selections to a variable.
- Using the `text()` method to add text to an element. 

Next time we'll be covering how to bind data to your DOM elements. This is where is gets really exciting, because it means dynamically loaded data! 😱

Feel free to have a play around with creating and styling different elements.  

[Part 2](https://dev.to/ellen_dev/learn-d3-js-with-me-bind-data-to-dom-selections-post-2-3ji8)