import React from 'react';
import { LEVELS } from '../models/levels.enum';
import { Task } from '../models/task.class';
import TaskComponent from '../pure/task';
import { useState, useEffect } from 'react';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)
    const [tasks, setTasks] = useState([defaultTask]);

    const changeCompleted = (id) =>{
        console.log("TODO: Cambiar estado de una tarea")
    }
    useEffect(() => {
        console.log('Task state has been modified')
        return () => {
            console.log('Task list component is going to unmount')
        };
    }, [tasks]);

    return (
        <div>
            <div>
                <h1>Your Tasks:</h1>
            </div>
            <div>
                <TaskComponent task={defaultTask}/>
            </div>
            {/* TODO: Aplicar un For/Map para renderizar todas las tareas */}
        </div>
    );
};




export default TaskListComponent;
