---
path: '/colour-overlay'
title: 'Two ways to create an image with a colour overlay in CSS'
published: true
date: '2019-09-29'
tags: ['tutorial', 'css']
cover_image: 'https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1430&q=80'
---

Using an image with a dark overlay is one of the quickest ways to make a beautiful hero header for a blog, landing page or portfolio. It's a trick I use constantly.

## Why should you add an overlay to your image? 

An overlay on an image not only improves aesthetics but it makes text much more readable. 

Consider this hero header I've mocked up. It's not great, is it? 

![Hero header with no overlay](https://cdn.hashnode.com/res/hashnode/image/upload/v1569769452143/oSJ6c7P-b.jpeg)

The text here is readable. But only *just*, and it's because I've used H1 and H2 headers. Yet, it's not very accessible for people with reduced vision, and it's also really busy to look at. Overlays vastly improve readability, along with making your design much more sleek. In this post, I'll be showing you a couple of ways to code them up.

There are, of course, many ways you can get to your end goal here. These are the two methods I find easiest to remember. Which method you choose will depends on the purpose of the image. If you're only after a pretty background, you can go about this any way you like. Alternatively, if your image isn't just decorative and you want people to notice it, you should use an image tag with an alt description for accessibility.

## Using an image tag and a section background. 

Again, this is your best option if your image isn't just decorative. This might not be in a header; it might be in an image aside or as part of an article. 

First, place an img tag in a section.

```
<header>
   <img src="https://bit.ly/2rlzaXi" alt="Five developers at work.">
   <section class='hero-header-text'>
      <h1>Ellen Macpherson</h1>
      <h2>Just another tech blog.</h2>
      <button>Read more.</button>
   </section>
</header>
```

I've purposely avoided a div here. If you're creating a header, make sure you're using semantic HTML to define it as such. This will help with both accessibility and SEO considerations. For more on why you should use semantic HTML elements, see [this](https://medium.com/adalab/the-importance-of-semantic-html-78e74fb75ff0) helpful blog post.

Now for the CSS. Make sure the image fills the header, either by using height: 100%, width: 100%, or by using object-fit: cover.

Set the background to your desired colour. In this case, i've just kept it black, but you could also make clever use of a linear gradient to really make things pop (see the next section for details). Set the opacity of the image somewhere between 0.3 - 0.5.

```
header {
    height: 600px;
    width: 100vw;
    background: black;
    overflow: hidden;
}

img {
   object-fit: cover;
   opacity: 0.4;
}
```

And viola! You've got a much nicer looking background that draws the eye immediately to the text and call-to-action button.

![Header with dark overlay](https://thepracticaldev.s3.amazonaws.com/i/oo0f7prdvysx8pmytc3g.png)


**Pros**: Allows you to set alt text for the image. Browser-friendly.

**Cons**: Involves more HTML and styling than other methods.

## Using a linear gradient

This is my preferred method. There's less styling and thinking involved around the layout. Often, you won't be using these images for descriptive purposes, so it seems more intuitive to handle the background in CSS. 

In this case, you don't need to reference the image in the HTML at all, so the code only involves the header (or whichever tag you want to style) and any text or buttons on top: 

```
<header>
    <section class='hero-header-text'>
        <h1>Ellen Macpherson</h1>
        <h2>Just another tech blog.</h2>
        <button>Read more.</button>
    </section>
</header>
```

Remember, you can't set alt tags without HTML, so make sure the image you're using is purely decorative. 

Although CSS linear gradients is well-supported now, I'm going to use a fallback colour along with the webkit prefix to make sure I cover all browser possibilities. This also gives you a fallback if, for any reason, the background image is slow to load. Remember the C in CSS; everything cascades. Therefore, your foolproof fallback colour and alternative webkit prefixed styles should always come before the least-supported solution. In this case, that's linear-gradient().

```
header {
    height: 600px;
    width: 100vw;
    background: black;
    overflow: hidden;
    background: #C33764;  /* fallback colour. Make sure this is just one solid colour. */
    background: -webkit-linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)), url("https://bit.ly/2rlzaXi");
    background: linear-gradient(rgba(29, 38, 113, 0.8), rgba(195, 55, 100, 0.8)), url("https://bit.ly/2rlzaXi"); /* The least supported option. */
}

img {
   object-fit: cover;
}

```

Here we are with a more colourful interpretation of an overlay:

![Header with pink and purple gradient overlay](https://thepracticaldev.s3.amazonaws.com/i/9r338f11rjy94eou7e6u.png)

In this example, I've used the RGBA colour format to make the gradient transparent and set the opacity to 0.8 for a bold finish. However, colour gradients will never look the same on different images. Play around with the opacity to make sure it works well with your design. For more impact, make the image underneath grayscale and alter its contrast.

**Pros**: Uses fewer lines of code. Easier to implement.

**Cons**: Issues around browser support mean you'll have to remember to set a fallback image or colour for your background. 

That's it! If you have any other great ways to implement an overlay, let me know in the comments. Let me know your favourite gradients, too 👇