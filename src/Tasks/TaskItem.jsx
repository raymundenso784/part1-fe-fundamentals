import React from 'react'

const TaskItem = ({task, onDeleteClickHandler}) => {
  return (
    <li className="flex justify-between items-center bg-gray-200 p-2 rounded-md">
        <span
            className={`cursor-pointer text-gray-500 ${task.complete ? "line-through" : ""}`}
            onClick={()=>{console.log('Clicked')}}
        >{task.task}</span>
        <div>
            <button onClick={() => onDeleteClickHandler(task.id)} className="text-red-500 hover:text-red-700">×</button>
        </div>
    </li>
  )
}

export default TaskItem