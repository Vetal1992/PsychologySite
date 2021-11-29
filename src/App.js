import './App.css'
import Header from "./Components/header/Header";
import Body from './Components/body/Body';
import { BrowserRouter } from 'react-router-dom';
import { Component } from 'react';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className='app'>
                    <Header />
                    <Body className='body' />
                </div>
            </BrowserRouter >
        )
    }
}

export default App;