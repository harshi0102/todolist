
<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖-About-the-Project ](#-about-the-project-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
    - [Run tests](#run-tests)
    - [Deployment](#deployment)
  - [👥 Author ](#-author-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [📝 License ](#-license-)
<!-- PROJECT DESCRIPTION -->

# 📖-About-the-Project <a name="about-project"></a>

![screenshot 1](./src/img/ToDo1.png)
![screenshot 2](./src/img/ToDo2.png)
![screenshot 3](./src/img/ToDo3.png)
![screenshot 4](./src/img/ToDo4.png)
![screenshot 5](./src/img/ToDo5.png)

-***Live Demo Link***- https://harshi0102.github.io/todolist/

**To-do-list** is a project done for the activity "To Do list: list structure" of the Microverse Program. The goal is to to learn use webpack and javascript ES6.
In this project, you will build a simple HTML list of To Do tasks. The list will be styled according to the specifications listed later in this lesson. This simple web page will be built using webpack and served by a webpack dev server.

List structure (step 1):

- [x] Set up a new project with webpack that is based on the webpack exercise you have already completed.
- [x] Create an index.html file and write your HTML markup here. Create an empty To Do List placeholder (`<div>` or `<ul>` element). The index.html file must be set as a template using the HTML Webpack Plugin.
- [x] Create an index.js file and set an array of some simple to do tasks (array of objects). Each task object should contain three keys:
  - [x] i.   description [string].
  - [x] ii.  completed [bool].
  - [x] iii. index: [number].
- [x] Write a function to iterate over the tasks array and populate an HTML list item element for each task.
- [x] On page load render the dynamically created list of tasks in the dedicated placeholder. The list should appear in order of the index values for each task.
- [x] Create a style.css and set rules for the To Do List. CSS must be loaded by Webpack Style/CSS Loader. Your list should be a clone of the part of the minimalist project captured in the video below.

Add & remove functions (step 2):

- [x] Remove all hardcoded items from the tasks array.
- [x] Create a new JavaScript file for the new functionality.
- [x] Implement a function for adding a new task (add a new element to the array).
- [x] Implement a function for editing task descriptions.
- [x] Implement a function for deleting a task (remove an element from the array).
- [x] Implement a function for the "Clear all completed" button (use `filter()` method).
- [x] By default new tasks should have the property `completed` set to `false` and the property index set to the value of the new array length (i.e. if you're adding a 5th task to the list, the index of that task should equal to 5).
- [x] Deleting a task should update all remaining items' indexes, so they represent the current list order and are unique.
- [x] All changes to the To Do List should be saved in local storage.

Interactive list (step 3):

- [x] Add a new JavaScript files and import it as a module:
  - [x] it will contain methods related to the status updates (`completed`: `true` / `false`).
- [x] Add event listener to the checkbox (`change`).
- [x] Update items object's value for `completed` key upon user actions.
- [x] Store the updated array of items in local storage, so the user gets the correct list values after the page reloads.


## 🛠 Built With <a name="built-with"></a>
- HTML
- CSS
- JavaScript

### Tech Stack <a name="tech-stack"></a>
- Git and Github
- VS-code
- JavaScript
- HTM
- CSS
- Webpack

### Key Features <a name="key-features"></a>

- **Use Webpack**
- **Use ES6**
- **Use Add/Update/Remove Tasks**
- **Drag and Drop task feature**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/es/docs/Web/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS">CSS</a></li>
    <li><a href="https://developer.mozilla.org/es/docs/Web/CSS">JavaScript</a></li>
  </ul>
</details>
 
<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
<!-- LIVE DEMO -->
 
## 🚀 Live Demo <a name="live-demo"></a>
 
- [LIVE-DEMO](<a href="#">(https://harshi0102.github.io/todolist/)
 
<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
<!-- GETTING STARTED -->
 
## 💻 Getting Started <a name="getting-started"></a>
 
To get a local copy up and running, follow these steps.
 
### Prerequisites
 
In order to run this project you need:
 
- A computer.
- Internet access.
- A modern web browser.
 
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


<!-- AUTHORS -->
 
## 👥 Author <a name="author"></a>

👤 **Harshika Govind**

- GitHub:(https://github.com/harshi0102)
- Twitter: (https://twitter.com/harshika0102m2)
- LinkedIn:(https://www.linkedin.com/in/harshikagovind/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [x] **Drag and Drop task**
- [x] **Personnalize the style**
 
<p align="right">(<a href="#readme-top">back to top</a>)</p>


- [ ] **Homepage**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/harshi0102/todolist/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
<!-- SUPPORT -->
 
## ⭐️ Show your support <a name="support"></a>
 
If the project was great as your view, don't hesitate to share and give it a star.
 
<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
<!-- ACKNOWLEDGEMENTS -->
 
## 🙏 Acknowledgments <a name="acknowledgements"></a>
 
I would like to thank Microverse

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
<!-- LICENSE -->
 
## 📝 License <a name="license"></a>
 
This project is [MIT](https://github.com/harshi0102/todolist/blob/main/LICENSE) licensed.
 
<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!-- README.md
Displaying README.md. -->
