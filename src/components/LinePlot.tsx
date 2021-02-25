import React from 'react'
import { Line } from 'react-chartjs-2'

const data =
{
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Demo line plot",
            backgroundColor: "#008080",
            borderColor: "#7fffd4",
            pointBorderWidth: 10,
            data: [5, 6, 9, 15, 30, 40, 30, 60],
        }
    ]
}

const LinePlot: React.FC = () => {
    return (
        <div>
            <section className="section">
                <h2>Line</h2>
                <Line data={data} />
            </section>
        </div>
    )
}

export default LinePlot
