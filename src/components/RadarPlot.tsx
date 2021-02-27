import React from 'react'
import { Radar } from 'react-chartjs-2'

const data = {
    labels: ['カカオ感', '果実感', '酸味', '甘み', '苦み', '後味'],
    datasets: [
        {
            label: 'ミルク / カカオ27％',
            backgroundColor: 'rgba(220,220,20, 0.1)',
            borderColor: 'orange',
            pointBackgroundColor: 'orange',
            pointBorderColor: '#fff ',
            data: [50, 25, 25, 25, 20, 60],
        },
        {
            label: 'ビター / カカオ40％',
            backgroundColor: 'rgba(20,220,20, 0.1)',
            borderColor: 'teal',
            pointBackgroundColor: 'teal',
            pointBorderColor: '#fff ',
            data: [50, 50, 25, 45, 25, 70],
        },
        {
            label: 'ダーク / カカオ56％',
            backgroundColor: 'rgba(200,20,20, 0.1)',
            borderColor: 'crimson',
            pointBackgroundColor: 'crimson',
            pointBorderColor: '#fff ',
            data: [60, 40, 40, 40, 35, 60],
        },
        {
            label: 'ハイカカオ / カカオ72％',
            backgroundColor: 'rgba(20,20,200, 0.1)',
            borderColor: 'skyblue',
            pointBackgroundColor: 'skyblue',
            pointBorderColor: '#fff ',
            data: [80, 60, 40, 25, 50, 70],
        },
        {
            label: 'Other Chocolate',
            backgroundColor: 'rgba(0,0,0, 0.05)',
            borderColor: 'gray',
            pointBackgroundColor: 'gray',
            pointBorderColor: '#fff ',
            data: [random(), random(), random(), random(), random(), random()],
        },
    ],
}

function random() {
    return (
        (
            Math.random() > 0.5 ? 1.0 :
                -1.0) * Math.round(Math.random() * 80)
    )
}

const RadarPlot: React.FC = () => {
    return (
        <div>
            <section className='section'>
                <h2>LOOK4 Chocolate / Radar</h2>
                <Radar data={data} />
            </section>
        </div>
    )
}

export default RadarPlot
