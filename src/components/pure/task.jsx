import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../models/task.class';
import { useEffect } from 'react';
import '../../styles/task.scss'
import { LEVELS } from '../models/levels.enum';

const TaskComponent = ({ task, complete, deleteTask }) => {

    useEffect(() => {
        console.log("Created task")
        return () => {
            console.log(`Task: ${task.name} is going to unmount`)
        };
    }, [task]);

    /**
     * Funcion que devuelve una badge dependiendo del nivel de la tarea
     */
    const taskCompletedIcon = () => {
        if(task.completed){
            return (<i onClick={()=>complete(task)} className='task-action bi-toggle-on' style={{color: 'green'}}></i>)
        }else{ 
            return (<i onClick={()=>complete(task)} className='task-action bi-toggle-off' style={{color: 'grey'}}></i>)
        }
    }

    /**
     * Funcion que devuelve un icono dependiendo del nivel de la tarea
     */
    const taskLevelBadge = () =>{
        switch (task.level) {
            case LEVELS.NORMAL:
                return( <h6 className='mb-0'><span className='badge bg-primary'>{task.level}</span></h6>);
            case LEVELS.URGENT:
                return( <h6 className='mb-0'><span className='badge bg-warning'>{task.level}</span></h6>);
            case LEVELS.BLOCKING:
                return( <h6 className='mb-0'><span className='badge bg-danger'>{task.level}</span></h6>);
                    
            default:
                break;
        }
    }

    return (

        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{task.description}</span>
            </td>
            <td className='align-middle'>
                {/* Ejecuta codigo de una funcin para retornar el elemento badge */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {taskCompletedIcon()}
                <i onClick={() => deleteTask(task)} className='task-action bi-trash' style={{color: 'tomato'}}></i>
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
};


export default TaskComponent;
