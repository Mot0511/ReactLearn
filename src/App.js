import React from 'react'
import './css/index.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from './components/UI/navbar/navbar'
import AppRouter from './components/AppRouter'

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App;
