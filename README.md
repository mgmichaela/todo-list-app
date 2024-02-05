# React To-Do List with CRUD Operations and Local Storage

## Overview
This React To-Do List project incorporates the fundamental CRUD (Create, Read, Update, Delete) operations for managing tasks. Additionally, it utilizes the browser's localStorage to persist the to-do list even after the user refreshes the page or closes the browser. The application is designed to be responsive, ensuring a seamless experience across various screen sizes. It has been deployed using Netlify, making it accessible online.

## Features
- **Create:** Add new tasks to the to-do list.
- **Read:** View and display the existing tasks.
- **Update:** Edit and modify tasks on the list.
- **Delete:** Remove tasks from the to-do list.
- **Local Storage:** Utilizes browser's localStorage to store tasks locally.
- **Responsiveness:** Designed to be accessible and functional on smaller screens.
- **Error Handling:** Displays an error message when attempting to add an empty task.

## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites
Ensure you have Node.js and npm installed on your machine.

- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository:
```
git clone https://github.com/mgmichaela/todo-list-app.git
```

2. Navigate to the project directory:
```
cd todo-list-app
```

3. Install dependencies:
```
npm install
```

### Running the Application
Start the development server:
```
npm start
```

Open your browser and visit `http://localhost:3000` to view the to-do list application.

## Deployment
This project has been deployed using [Netlify](https://www.netlify.com/) and is accessible online [here](https://stellar-genie-b39894.netlify.app/).

## Usage
- Adding a Task:
  - Enter a task in the input field.
  - Press the **+** icon button.
  - An error message will be displayed if you attempt to add an empty task.

- Editing a Task:
  - Click on the task you want to edit.
  - Modify the task text.
  - Press the **save** icon button or to save the changes.

- Deleting a Task:
  - Click on the **trash** icon button next to the task you want to remove.

- Local Storage:
  - The to-do list is saved locally and will persist even after refreshing the page or closing the browser.
---

Happy task managing! 🚀
