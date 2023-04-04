
# To Do List project
# [Live-Demo](https://harshi0102.github.io/todolist/)

> Second Javascript project from Module 2 at Microverse
<div align="left">
<img src="todo1.jpg" width="650" height="auto" alt="screenshot1">
<img src="todo2.jpg" width="650" height="auto" alt="screenshot1">
<img src="todo3.jpg" width="650" height="auto" alt="screenshot1">
</div>
In this project, you will build a simple HTML list of To Do tasks. The list will be styled according to the specifications listed later in this lesson. This simple web page will be built using webpack and served by a webpack dev server.

## List structure (step 1):

- [x] Set up a new project with webpack that is based on the webpack exercise you have already completed.
- [x] Create an index.html file and write your HTML markup here. Create an empty To Do List placeholder (`<div>` or `<ul>` element). The index.html file must be set as a template using the HTML Webpack Plugin.
- [x] Create an index.js file and set an array of some simple to do tasks (array of objects). Each task object should contain three keys:
  - [x] i.   description [string].
  - [x] ii.  completed [bool].
  - [x] iii. index: [number].
- [x] Write a function to iterate over the tasks array and populate an HTML list item element for each task.
- [x] On page load render the dynamically created list of tasks in the dedicated placeholder. The list should appear in order of the index values for each task.
- [x] Create a style.css and set rules for the To Do List. CSS must be loaded by Webpack Style/CSS Loader. Your list should be a clone of the part of the minimalist project captured in the video below.

## Interactive list (step 2):

- Add a new JavaScript files and import it as a module:
- it will contain methods related to the status updates (`completed`: `true` / `false`).
- Add event listener to the checkbox (`change`).
- Update items object's value for `completed` key upon user actions.
- Store the updated array of items in local storage, so the user gets the correct list values after the page reloads.

## Add & remove functions (step 3):

-Remove all hardcoded items from the tasks array.
- Create a new JavaScript file for the new functionality.
- Implement a function for adding a new task (add a new element to the array).
- Implement a function for editing task descriptions.
- Implement a function for deleting a task (remove an element from the array).
- Implement a function for the "Clear all completed" button (use `filter()` method).
-  By default new tasks should have the property `completed` set to `false` and the property index set to the value of the new array length (i.e. if you're adding a 5th task to the list, the index of that task should equal to 5).
-  Deleting a task should update all remaining items' indexes, so they represent the current list order and are unique.
- All changes to the To Do List should be saved in local storage.

## Built With

- Major languages: HTML, CSS, JS
- Frameworks: none
- Technologies used: Git, webpack

## Live Demo

- [Live Demo](https://harshi0102.github.io/todolist/)

## Source code

- [GitHub source code link](https://github.com/harshi0102/todolist.git)

## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

- Internet connection and browser
- A text editor preferably ([Visual Studio Code](https://code.visualstudio.com/))
- Browser

### Setup

- For detail description of how to get started with webpack, please, look at: [webpack](https://webpack.js.org/guides/getting-started/)

### Install

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download/)

### Usage

- Clone the repository using "`https://github.com/harshi0102/todolist.git`"
- Change directory into the project folder `cd todolist`
- Run `npm install`
- Run `npm start`
- A new browser will open automatically with application loaded

### Run tests

- Passed Lighthouse, webhint, Stylelint and ESLint tests

### Deployment

- All the files necessary for deployment are in the `/dist` folder

## Author

👤 **Harshika Govind**

- GitHub: [@harshi0102](https://github.com/harshi0102)
- Twitter: [@harshika0102me](https://twitter.com/harshika0102me)
- LinkedIn: [harshikagovind](https://linkedin.com/in/harshikagovind)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/harshi0102/todolist/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

This is a solo project, but I want to thanks my partners at ![](https://img.shields.io/badge/Microverse-blueviolet) for making it better. 


## 📝 License

This project is [MIT](https://github.com/harshi0102/todolist/blob/main/LICENSE) licensed.
