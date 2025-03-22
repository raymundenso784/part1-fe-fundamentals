import { useEffect, useState } from 'react'
import TodoForm from './Form/TodoForm';
import RenderTasks from './Tasks/TaskWrapper';

const Todo = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const addButtonClickHandler = () => {
        const taskText = task;
        if (taskText === "") return;


        // Previous todo implementation
        // we save data to the localstorage
        // const taskObject = { 
        //     text: taskText,
        //     completed: false,
        //     id: (tasks.length + 1)
        // };
        // let localStorageTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        // localStorageTasks.push(taskObject);
        // localStorage.setItem("tasks", JSON.stringify(localStorageTasks));

        fetch(`${import.meta.env.VITE_API_URL}/api/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json', // explicitly accept JSON
            },
            body: JSON.stringify({
                task: task
            }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then( () => {
            fetchTasks();
        })
        .catch(error => {
            console.error('Error during POST request:', error);
        });
        setTask('');
    }

    // Previous todo implementation
    // retrieve data from our localstorage
    // const renderTasks = () => {
        // setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
    // }

    const deleteTaskClickHandler = (id) => {
        // Previous todo implementation
        // delete data from our localstorage
        // let localStorageTasks = JSON.parse(localStorage.getItem("tasks"));
        // localStorageTasks = localStorageTasks.filter(task => task.id !== id);
        // localStorage.setItem("tasks", JSON.stringify(localStorageTasks));
        // renderTasks();

        fetch(`${import.meta.env.VITE_API_URL}/api/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(() => {
            fetchTasks();
        })
        .catch(error => {
            console.error('Error during DELETE request:', error);
        });
    }

    const fetchTasks = () => {
        fetch(`${import.meta.env.VITE_API_URL}/api/todos`)
            .then(response => response.json())
            .then(data => {
                setTasks(data.data);
            })
            .catch(error => {
                console.error('Error fetching from Laravel:', error);
            });
    }

    useEffect(() => {
        //console.log('Getting values from localstorage');
        // fetch(`${import.meta.env.VITE_API_URL}/api/test`)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Response from Laravel:', data);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching from Laravel:', error);
        //     });

        setIsLoading(true);
        fetchTasks();
        setTimeout(()=> {
            // renderTasks();
            setIsLoading(false);
        }, 1500)
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h1 className="text-2xl font-bold mb-4 text-center text-black">To-Do List</h1>
            <TodoForm
              onButtonClickHandler={addButtonClickHandler}
              onInputChangeHandler={(value) => setTask(value)}
              inputValue={task}
            />
            <ul id="taskList" className="space-y-2">
                <RenderTasks
                  isLoading={isLoading}
                  tasks={tasks}
                  deleteTaskClickHandler={deleteTaskClickHandler}
                />
            </ul>
        </div>
    )
}

export default Todo