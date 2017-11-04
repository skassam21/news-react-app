Welcome to NewsEd!
===================


Welcome to our web application **NewsEd** for Assignment 2 for *CSC309*.

NewsEd is an application in helping you find personalised news article pertaining to your tastes.

---
Who We Are
-----------
With the tangle of different news source prevalent in today's media, we feel that it is difficult for one to find the information they want.

As a group of students, we've decided to build this web application to better help individuals explore and analyse a variety of different news mediums that best interests them.

With this in mind, there are **three important principles** our application revolves around.

#### <i class="icon-refresh"></i> Specificity

 Everybody has different likes and interests and this is something we value
 as we want to find you the articles that you most care about in today's world.

#### <i class="icon-pencil"></i> Presentation

Nobody likes a convoluted, ambiguous and hard to read website, so we design our application with the principles in mind that will best fit our user audience.

#### <i class="icon-trash"></i> Reliability
Fake news is a worrying trend in today's society and we want to make sure 
that we only pick and relay to you the most reliable and trusted news sources.


---
How We Work
-----------

We work by providing you a short interactive survey to complete before you enter the site.

This way, we are able to run our algorithm to best provide you a news feed that best suites your interests and needs.

Once your news feed is generated, you furthermore will also have the option to dynamically change your feed.


*With all this said, we really hope you enjoy and find our application useful!*

---











## Group Members
- Student 1: Gavin Shi Jie, Yu (1002195377)
- Student 2: Jason Dam (1002366076)
- Student 3: Shums Kassam (998816713)
- Student 4: Patrick Ward (1004660137)

## Application Technicals

Our application was built with webpack and Reactjs.

Here are the list of pages/views required:
- First page gets to know your tastes and chooses a bunch of new channels to follow
- Second page shows you the top stories for each news channel - you can sort them, change their order, and filter by channel
- Third page is a settings page that lets you change the channels that you are subscribed to

## Debugging and Testing

For debugging, run:

    ```sh
    npm install
    npm run debug
    ```

Then you can open the webpage `http://localhost:8080` to see the application. Make any changes to the javascript, and the page will automatically reload.

If you add a package to `package.json` make sure to run:
    ```sh
    npm install
    npm run build
    ```

### Test

Open up `index.html` to see the full application after building.
