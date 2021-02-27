import React from 'react'
import { Bubble } from 'react-chartjs-2'

const data = {
    // labels: ['React', 'Angular', 'Vue'],
    datasets: [
        {
            label: 'React',
            backgroundColor: 'rgba(20,150,220, 0.9)',
            borderColor: 'transparent',
            data: [{ x: 20, y: 866, r: 6350000 / 100000 }],
        },
        {
            label: 'Anglar',
            backgroundColor: 'rgba(220,50,20, 0.9)',
            borderColor: 'transparent',
            data: [{ x: 30, y: 389, r: 410000 / 100000 }],
        },
        {
            label: 'Vue',
            backgroundColor: 'rgba(40,220,20, 0.9)',
            borderColor: 'transparent',
            data: [{ x: 10, y: 749, r: 1320000 / 100000 }],
        },
    ],
}

const options = {
    title: {
        display: true,
        fontSize: 18,
        text: 'global npm downloads',
    },
    scales: {
        yAxes: [
            {
                scaleLabel: {
                    display: true,
                    fontSize: 18,
                    labelString: 'Job offer in Linkedin',
                },
                ticks: {
                    min: 0,
                    max: 1500,
                    fontSize: 13,
                },
            },
        ],
        xAxes: [
            {
                scaleLabel: {
                    display: true,
                    fontSize: 18,
                    labelString: 'JoLearning Cost',
                },
                ticks: {
                    min: 5,
                    max: 40,
                    fontSize: 13,
                },
            },
        ],
    },
}

const BubblePlot: React.FC = () => {
    return (
        <div>
            <section className='section'>
                <h2>Bubble Chart</h2>
                <Bubble data={data} options={options} />
            </section>
        </div>
    )
}

export default BubblePlot
