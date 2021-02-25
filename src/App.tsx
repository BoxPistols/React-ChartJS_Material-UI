import React from 'react'
import './App.scss'
import LineProt from './components/LinePlot'
import PiePlot from './components/PiePlot'
import MaterialUI from './components/MaterialUI'

function App() {
    return (
        <div className='App'>
            <MaterialUI />
            <LineProt />
            <PiePlot />
        </div>
    )
}

export default App
