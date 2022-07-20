import React, {useState} from 'react';
import Child from '../pure/child';

const Father = () => {
    const [name, setName] = useState('Sergio');

    const showMessage = (text) => {
        alert(`Message recieved: ${text}`)
    }

    const updateName = (newName) =>{
        setName(newName)
    }
    return (
        <div>
            <h3>Hola, {name}</h3>
            <Child name={name} send={showMessage} update={updateName}/>
        </div>
    );
}

export default Father;
