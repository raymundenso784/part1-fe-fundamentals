import React from 'react'
import TaskItemSkeleton from './Skeleton'
import TaskItem from './TaskItem'

const RenderTasks = ({isLoading, tasks, deleteTaskClickHandler}) => {
    if(isLoading) {
        return (
            <>
                <TaskItemSkeleton />
                <TaskItemSkeleton />
                <TaskItemSkeleton />
                <TaskItemSkeleton />
                <TaskItemSkeleton />
            </>
        )
    }

    if(tasks.length === 0) {
        return (
            <li className="w-full text-center bg-gray-200 p-2 rounded-md h-[40px]">
                Empty To Do List!!!!
            </li>
        )
    }

    return tasks.map((task) => 
        <TaskItem key={task.id} task={task} onDeleteClickHandler={deleteTaskClickHandler}/>
    )
}

export default RenderTasks