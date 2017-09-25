# ghostwheel
a starter project for building static sites with css-modules, webpack, and jekyll

This is a project that's at least in part just for me, but there's not really much in the way of custom code so go crazy if you feel like.

## What about react?
The concept here is that this is primarily built for supplementing jekyll workflows with css-modules. Not really looking to build views with javscript at all.

## requirements

- node 8.5.0
- ruby 2.3.3
- There is a preinstall task that you need to have a look at. If that looks okay to you then go for it. Adjust as needed.

you shouldn't have any issues installing after that. You'll be working on things in the `src` folder and in the jekyll folder.

The `src` folder is where webpack works from.
jekyll is a pretty normal jekyll app.

`npm start` will kick off webpack in watch mode. Webpack fires up a jekyll server. SO FAR, this hasn't been a problem.
