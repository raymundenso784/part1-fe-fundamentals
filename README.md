# React.js Todo App

This Todo App built with React.js integrates the API from the Laravel backend project (`part2-be-fundamentals`).

## Dependencies

- [Node.js](https://nodejs.org/)
- Clone the backend repository: [`part2-be-fundamentals`](https://github.com/raymundenso784/part2-be-fundamentals) (refer to its `README.md` for instructions)

## Installation

To install necessary packages, run:

```bash
npm install
```

## Running the App

To launch the app and view it in your browser, run:

```bash
npm run dev
```

## Additional Resources

- Under the `html-css-js` folder, you can find a sample Todo App built using plain JavaScript, HTML, and CSS.

## Optional Assignment: Frontend Task (React.js)

### Objective
Implement an edit feature with API integration using the `PUT` method.

### Instructions

- Create a new `useState` named `updateTask` to manage the task currently being edited.
- Define a dedicated function (`handleUpdateTask`) to manage sending updated task data to the backend.
- Pass both `updateTask` and the `handleUpdateTask` function as props into your `RenderTasks` component, and subsequently pass them down to the `TaskItem` component.
- Inside the `TaskItem` component, upon clicking the pencil (edit) icon:
  - Replace the current task text with an editable text input field.
  - Replace existing buttons/icons with two new buttons: **Update** and **Cancel**.
- **Update** button functionality:
  - Send a `PUT` request to your backend API with the updated task data. *(Refer to your existing `addButtonClickHandler` fetch call and simply change the method to `PUT`.)*
  - After a successful update, call `fetchTasks()` to refresh the displayed Todo list.
- **Cancel** button functionality:
  - Revert the task item to its original state, displaying the original task text alongside the pencil icon and delete (X) button.
