import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [name, setName] = useState('');
    const changeName = () => {
        const newName = prompt('What is your name?');
        setName(newName);
    }

    return (
        <div className="App">
            <h1>I AM PM</h1>
            {name && <h2>Hello <b>{name}</b></h2>}
            <button onClick={changeName}>Change name</button>
        </div>
    );
}

export default App;
