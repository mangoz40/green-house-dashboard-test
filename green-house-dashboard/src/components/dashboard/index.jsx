import { React, useState, useEffect } from 'react'
import Card from '../card'
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BsMoisture } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import LineGrah from '../graphs/line'
import DoughGraph from '../graphs/donut'
import BarGraph from '../graphs/bar'
import io from 'socket.io-client';

function Dashboard() {

//current kpi's received
 const [currKPIs, setCurrKPIs] = useState([0, 0, 0, 0])

// kpi lists for temperature, light, humid, moisture
 const [tempList, setTempList] = useState([0])
 const [moistList, setMoistList] = useState([0])
 const [lightList, setLightList] = useState([0])
 const [humidList, setHumidList] = useState([0])

 //time for received KPI
 const [times, setTimes] = useState([0])

 if (tempList.length == 0) {
  console.log('zero')
 }

 // connecting to listening socket for greenhouse kpi's data 
  useEffect(() => {
    const socket = io('http://localhost:5000')
    socket.on('connect', ()=> {
      console.log('connected')

      socket.on('updateSensorData', (message) => {
        setCurrKPIs([message.temperature, message.humidity, message.moisture, message.light])
        setMoistList(prevItems => prevItems.concat(message.moisture))
        setLightList(prevItems => prevItems.concat(message.light))
        setHumidList(prevItems => prevItems.concat(message.humidity))
        setTempList(prevItems => prevItems.concat(message.temperature));
        setTimes(prevItems => prevItems.concat(message.time))

      })
    })
  })
  console.log(tempList)

  // total values collected for each KPI
  let totalTemp = 0, totalHumid = 0, totalMoist = 0, totalLight = 0 ; 

  for (let i=0; i < tempList.length; i++) {
    totalTemp += tempList[i]
    totalHumid += humidList[i]
    totalMoist += moistList[i]
    totalLight += lightList[i]
    

  }
  console.log(`total: ${totalTemp} lenght: ${tempList.length}`)

  //average values for each kpi
  let tempAvg = (totalTemp / tempList.length).toFixed(2)
  let moistAvg = (totalMoist / moistList.length).toFixed(2)
  let lightAvg = (totalLight / lightList.length).toFixed(2)
  let humidAvg = (totalHumid / humidList.length).toFixed(2)

  // Line graph data values
  const values = [tempList, humidList, moistList, lightList]
  const labels = ['Temperature', 'HJumidity', 'Moisture', 'Light']
  const colors = ['#72A0C1', '#002D62' , '#fc6c85', '#FF3800']
  const doughnutValues = [tempList.length, humidList.length, moistList.length, lightList.length ]
  return (
    <div>          
      <div className='flex overflow-auto mb-[50px]'>
        <div className='ml-[10px] active:bg-primary' onClick={()=> setDisplayDistrict(0)}>
          <Card  icon={FaTemperatureHigh} color={{color:"#FF3800"}} 
            currKpi={currKPIs[0]} kpiName={'Temperature'} kpiAvg={tempAvg}/>
        </div>
        <div className='ml-[10px] active:bg-primary' onClick={()=> setDisplayDistrict(0)}>
          <Card  icon={WiHumidity} color={{color:"#fc6c85"}} 
            currKpi={currKPIs[1]} kpiName={'Humidity'}  kpiAvg={humidAvg}/>
        </div>
        <div className='ml-[10px] active:bg-primary' onClick={()=> setDisplayDistrict(0)}>
          <Card  icon={CiLight} color={{color:"#72A0C1"}} 
            currKpi={currKPIs[3]} kpiName={'Light'} kpiAvg={lightAvg}/>
        </div>
        <div className='ml-[10px] active:bg-primary' onClick={()=> setDisplayDistrict(0)}>
          <Card  icon={BsMoisture} color={{color: "#002D62"}} 
            currKpi={currKPIs[2]} kpiName={'Moisture'} kpiAvg={moistAvg}/>
        </div>
        
      </div>
      <div className='flex grid grid-cols-1 xl:grid-cols-2'>
        <div className='xl:w-[600px]'>
            <LineGrah values={values} times={times} labels={labels} colors={colors}/>
        </div>
        <div className='w-[350px] ml-[50px]'>
          <DoughGraph values={doughnutValues} labels={labels} colors={colors} />
        </div>
      </div> 
      {/*<BarGraph colors={colors} labels={labels}/>      */ }         
    </div>
  )
}

export default Dashboard