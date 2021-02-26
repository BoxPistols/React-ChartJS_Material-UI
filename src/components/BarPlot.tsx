import React from 'react'
import { Bar } from 'react-chartjs-2'

const data =
{
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Demo Bar plot",
            backgroundColor: "#008080",
            borderColor: "transparent",
            hoverBackgroundColor: "tomato",
            data: [5, 6, 9, 15, 30, 40, 30, 60],
        }
    ]
}

const BarPlot: React.FC = () => {
    return (
        <div>
            <section className="section">
                <h2>Bar</h2>
                <Bar data={data} />
            </section>
        </div>
    )
}

export default BarPlot
