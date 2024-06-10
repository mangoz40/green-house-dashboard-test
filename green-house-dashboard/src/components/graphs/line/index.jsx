import React from 'react'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'


function LineGraph(props) {
    let size = props.times.length
    let times

    // reduce the used time data to 20
    if (size > 20) {
        times = props.times.slice(size-20, size)
    }
    console.log(props.times)

    let datasets = []

    // reduce the used values data to 20
    props.values.forEach((values, index)=> {
        if (size > 20) {
            values = values.slice(size-20, size)
        }

        datasets.push({
            
            label: props.labels[index],
            data: [...values],
            fill: false,
            borderColor: props.colors[index],
            tension: 0.1

        })
    })
    const data = {
        labels: times,
        datasets: datasets
    }

    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Time(H:M:S)',
                    fontStyle: 'bold',
                    color: '#333'
                }            
              },
            y:  {
                title: {
                    display: true,
                    text: 'Measure',
                    fontStyle: 'bold',
                    color: '#333'
                }            
              },
        }

    }


    return (
        <div>
            <div className='text-center font-bold mt-[50px] text-[20px]'>
                CURRENT KPI VALUES 
            </div>
            <Line data={data} options={options}/>
        </div>
    )
}

export default LineGraph