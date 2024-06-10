import React from 'react'
import { Chart as chartjs, 
    BarElement, CategoryScale, 
    LinearScale, Tooltip, Legend } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import records from '../../../crypt/dbcop.json'

function DailyAvgChart(props) {
    const kys = Object.keys(records)
    
    let dailyAvgs = {} // daily calculated averages values for prev days
    let datasets = [] //used for chart js bar chart data
    
    // get data from json file and calaculate the averages
    for (let i = 0; i < kys.length; i++) {
        let temp = 0, moist = 0, light = 0, humid = 0 
        let ky = kys[i]
        let idxSize = 0
        records[ky].forEach((record, index) => {
            temp += record.temperature
            moist += record.moisture
            light += record.light
            humid += record.humidity
            idxSize = index

        })
        dailyAvgs[ky] = [temp/idxSize, humid/idxSize, light/idxSize, moist/idxSize] // calc average
    }

    for (let i = 0; i < kys.length; i++) {
        datasets.push({
            label: kys[i],
            data: dailyAvgs[kys[i]],
            color: props.colors[i],
            borderWidth: 1,
        })
    }

       

    

    console.log(dailyAvgs)
    const data = {
        labels: props.labels,
        datasets: datasets
    }
  return (
    <div>
       <div className='text-center font-bold text-[20px] mt-[50px]'>
            Average Values Collected Per Day
        </div>
        <Bar data={data} /> 
    </div>
    
  )
}

export default DailyAvgChart