import React from 'react'
import './App.scss'
import LineProt from './components/LinePlot'
import PiePlot from './components/PiePlot'
import BarPlot from './components/BarPlot'
import MaterialUI from './components/MaterialUI'
import RadarPlot from './components/RadarPlot'
import BubblePlot from './components/BubblePlot'

function App() {
    return (
        <div className='App'>
            <BubblePlot />
            <RadarPlot />
            <MaterialUI />
            <BarPlot />
            <LineProt />
            <PiePlot />
        </div>
    )
}

export default App
