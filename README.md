# Todo List app - React + RxJS

I have been using AngularJS 1.x in product development for a long time, which helped me to accumulate rich experiences in front-end development. Current front-end stack ([AngularJS 1.x](https://angularjs.org/)/[CoffeeScript](http://coffeescript.org/)/[RequireJS](http://requirejs.org/)/[Bower](http://bower.io/)/[Grunt](http://gruntjs.com/)) I'm using is kind of outdated. New frameworks, libraries and tools emerge everyday. I see interesting frameworks/libraries/tools like [React](https://facebook.github.io/react/), [Immutable.js](https://facebook.github.io/immutable-js/), [falcor](https://github.com/Netflix/falcor), [GraphQL](https://facebook.github.io/graphql/), [webpack](https://webpack.github.io/), [TypeScript](http://www.typescriptlang.org/), [ES6](http://www.ecma-international.org/ecma-262/6.0/) and more. Reactive programming is also gaining popularity. So it looks very to combine these tools together to create something new to update myself.

When searching and reading tutorials online, I find out that good documentation and good examples don't come together. API documentation tends to use simple examples, while good examples typically have no documentation and you have to dig into the source code to understand. To apply new techniques into product development, we always need to understand not only the basics, but also best practices and recommended solutions to typical programming problems.

I'm trying to use a simple yet complete todo list app to demonstrate the learning experiences with React and [RxJS](https://github.com/Reactive-Extensions/RxJS).

## I want to learn React, now what?

After reading the official React documentation, I think I'm ready to start coding. I don't want to use [Yeoman](http://yeoman.io/) to generate a bunch of code that I don't understand. So I start from the basic feature - displaying a list of todos.

### Tools, tools, tools

After using `npm init` to initialize my project, I need a way to compile TypeScript to JavaScript. I decided to give webpack a go after using Grunt for a long time. Webpack looks like a beast from its documentation!!! After reading webpack's official documentation and some React starter projects, I got a basic dev server running.

*Generators, boilerplates and starter projects are only useful when you already understand those frameworks and libraries and are tired of repeating yourself. They are generally not useful when you are trying to learn something new. The generated code look fancy and works magically, but it's too much for beginners.*

My goal is very clear. I just want to get a dev server running with hot loading, so I can quickly test my code.

### Basic React UI

After webpack is configured, I moved on to create the basic UI. This includes defining the basic domain model, a simple in-memory service layer and the React components.

See tag `0.1` for the code.
