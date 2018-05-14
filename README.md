# jQuery Calculator

## The goal of building this calculator was to continue working with jQuery and manipulating the DOM. As well, the logic behind building a calculator is quite complex and took some work to figure out. In the end, the user is able to string multiple operations together. However, the calculator is not smart enough to factor in [order of operations](https://en.wikipedia.org/wiki/Order_of_operations).

## Technology
- HTML5
- CSS3
- JavaScript/ES6
- Node.JS/Browserify/Grunt
- Bootstrap 3

## Screenshots

Here is the jQuery calculator upon load:

![Page on load](https://raw.githubusercontent.com/amillion3/jquery-calculator/master/screenshots/on-load.png)
___

Here, a basic addition operation has been executed:

![Basic Addition Operation](https://raw.githubusercontent.com/amillion3/jquery-calculator/master/screenshots/basic-equals-operation.png)
___

Here, the user has pressed the `+` key and the calculator adds the previous value to the current value.

![Stacking Math Operations](https://raw.githubusercontent.com/amillion3/jquery-calculator/master/screenshots/another-operation.png)
___

The user has divided the previous value by `2`, resulting in a final value of `5`.

![Continued stacking of math operations](https://raw.githubusercontent.com/amillion3/jquery-calculator/master/screenshots/yet-one-more-operation.png)
___
## Running The Project
1. Clone down this repo and CD into project.
2. Install the [http-server](https://www.npmjs.com/package/http-server) plugin via [npm](https://www.npmjs.com/).
3. CD into the `lib` directory and run `npm install` via command line.
4. In the `lib` directory run the command `grunt`.
5. CD to the root of the directory and type `hs` to start the local http-server.
6. The terminal will give you a URL, such as `http://127.0.0.1:8081`, enter that address into your web browser.