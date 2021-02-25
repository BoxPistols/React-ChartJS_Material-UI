import React from 'react'
import { Pie, Doughnut } from 'react-chartjs-2'

const dataObj = {
    labels: ['Win', 'Mac', 'Linux'],
    datasets: [
        {
            data: [70, 25, 5],
            backgroundColor: ['teal', 'tomato', 'orange'],
            hoverBackgroundColor: ['gray', 'gray', 'gray'],
            borderColor: ['transparent', 'transparent', 'transparent'],
        },
    ],
}
const PiePlot = () => {
    return (
        <div>
            <section className="section">
                <h2>Pie</h2>
                <Pie data={dataObj} />
                <Doughnut data={dataObj} />
            </section>
        </div>
    )
}

export default PiePlot
