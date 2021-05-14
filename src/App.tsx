import React from 'react'
import './App.scss'
import LineProt from './components/LinePlot'
import PiePlot from './components/PiePlot'
import BarPlot from './components/BarPlot'
// import MaterialUI from './components/MaterialUI'
import RadarPlot from './components/RadarPlot'
import BubblePlot from './components/BubblePlot'
import MaterialGrid from './components/MaterialGrid'
// API
import ApiDog from './components/ApiDog'

function App() {
    return (
        <div className='App'>
            <ApiDog />
            <MaterialGrid />
            {/* <MaterialUI /> */}
            <BubblePlot />
            <RadarPlot />
            <BarPlot />
            <LineProt />
            <PiePlot />
        </div>
    )
}

export default App
