import React from 'react';
import { LEVELS } from '../models/levels.enum';
import { Task } from '../models/task.class';
import TaskComponent from '../pure/task';
import { useState, useEffect } from 'react';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example 1', 'Description 1', true, LEVELS.NORMAL)
    const defaultTask2 = new Task('Example 2', 'Description 2', false, LEVELS.URGENT)
    const defaultTask3 = new Task('Example 3', 'Description 3', false, LEVELS.BLOCKING)



    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false);
        return () => {
            console.log('Task list component is going to unmount')
        };
    }, [tasks]);

    const completeTask = (task) =>{
        console.log("Completed this task: ", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks[index].completed = !tempTasks[index].completed;
        // We update the state of the cmponent  with the new list and it will update the iteration
        // of the tasks in order to show the updated task.
        setTasks(tempTasks);

    }
    const deleteTask = (task) =>{
        console.log("Deleted task:", task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }
    const addTask = (task) =>{
        console.log("Added task:", task);
        // const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>
                            Your Tasks:
                        </h5>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position:'relative', height:'400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks.map((task, index) => <TaskComponent key={index} task={task} complete={completeTask} deleteTask={deleteTask}/>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <TaskForm add={addTask}/>
        </div>
    );
};




export default TaskListComponent;
