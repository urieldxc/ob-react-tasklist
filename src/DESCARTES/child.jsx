import React, { useRef } from 'react';


const Child = ({ name, send, update }) => {

    const messageRef = useRef('');
    const nameRef = useRef('')

    const pressButton = () => {
        const text = messageRef.current.value;
        alert(`Text by ref: ${text}`)

    }
    const pressButtonParams = (text) => {
        alert(`Text: ${text}`)
    }

    const submitName = (e) =>{
        e.preventDefault();
        update(nameRef.current.value);
    }

    return (
        <div>
            <p onMouseOver={()=> console.log('onmouseover')}> por que eres... {name}... ¿No?</p>
            <button onClick={() =>{console.log('pressed button 1 ')}}>
                Button 1
            </button>
            <button onClick={pressButton}>
                Button 2
            </button>
            <button onClick={() =>pressButtonParams('Hello')}>
                Button 3
            </button>
            
            <input 
                placeholder='Insert a text'
                onFocus={()=> console.log('Input focused')} 
                onChange={(e) => console.log(e.target.value)}
                ref={messageRef}
                />
            <button onClick={() => send('Hello father')}>
                Send message
            </button>
            <div style={{marginTop: '20px'}}>
                <form onSubmit={submitName}>
                    <input placeholder='New name' ref={nameRef}/>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;
