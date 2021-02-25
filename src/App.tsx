import React from 'react'
import './App.scss'
import LineProt from './components/LinePlot'
import PiePlot from './components/PiePlot'

function App() {
    return (
        <div className="App">
            <LineProt />
            <PiePlot />
        </div>
    )
}

export default App
