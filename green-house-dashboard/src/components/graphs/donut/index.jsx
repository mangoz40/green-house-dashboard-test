import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'


function DoughGraph(props) {
    let data = []
    props.labels.forEach((label, index)=> {
        data.push({
            label: label,
            value: props.values[index],
            color: props.colors[index],
            cutout: "50%"
        })
    })

    const options = {
        plugins: {
            responsive: true,
        },
        cutout: data.map((item) => item.cutout),

    }

    const finalData = {
        labels: data.map((item) => item.label),
        datasets: [
            {
                data: data.map((item) => Math.round(item.value)),
                backgroundColor: data.map((item) => item.color),
                borderColor: data.map((item) => item.color),
                borderWidth: 1,
                dataVisibility: new Array(data.length).fill(true)
            }
        ]
    }
        
    return (
        <div>
            <div className='text-center font-bold text-[20px] mt-[50px]'>
                KPI COLLECTED TOTAL
            </div>
            <Doughnut data={finalData} options={options}/>
        </div>
    )
}

export default DoughGraph