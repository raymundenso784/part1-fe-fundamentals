import React from 'react'

const TodoForm = ({inputValue, onInputChangeHandler, onButtonClickHandler}) => {
    return (
        <div className="flex mb-4">
            <input
                id="taskInput"
                type="text"
                className="flex-grow p-2 border rounded-l-md focus:outline-none"
                placeholder="Add a new task..."
                value={inputValue} // Controlled component
                onChange={(e) => onInputChangeHandler(e.target.value)}
            />
            <button
              className="bg-red-200 text-black px-4 py-2 rounded-r-md hover:bg-blue-600"
              onClick={onButtonClickHandler}
            >
                Add
            </button>
        </div>
    )
}

export default TodoForm