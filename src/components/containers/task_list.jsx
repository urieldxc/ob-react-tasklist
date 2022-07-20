import React from 'react';
import { LEVELS } from '../models/levels.enum';
import { Task } from '../models/task.class';
import TaskComponent from '../pure/task';
import { useState, useEffect } from 'react';

const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL)
    const [tasks, setTasks] = useState([defaultTask]);
    const [loading, setLoading] = useState(true);

    const changeCompleted = (id) =>{
        console.log("TODO: Cambiar estado de una tarea")
    }
    useEffect(() => {
        console.log('Task state has been modified')
        setLoading(false);
        return () => {
            console.log('Task list component is going to unmount')
        };
    }, [tasks]);

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
                                {/* TODO: Aplicar un For/Map para renderizar todas las tareas */}
                                <TaskComponent task={defaultTask}/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};




export default TaskListComponent;
