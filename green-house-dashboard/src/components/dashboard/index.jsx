import { React, useState, useEffect } from 'react'
import Card from '../card'
import { FaTemperatureHigh } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { BsMoisture } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import io from 'socket.io-client';

function Dashboard() {

//current kpi's received
 const [currKPIs, setCurrKPIs] = useState([0, 0, 0, 0])

// kpi lists for temperature, light, humid, moisture
 const [tempList, setTempList] = useState([0])
 const [moistList, setMoistList] = useState([0])
 const [lightList, setLightList] = useState([0])
 const [humidList, setHumidList] = useState([0])

 // connecting to socket for greenhouse kpi's
  useEffect(() => {
    const socket = io('http://localhost:5000')
    socket.on('connect', ()=> {
      console.log('connected')

      socket.on('updateSensorData', (message) => {
        setCurrKPIs([message.temperature, message.humidity, message.moisture, message.light])
        setMoistList([...moistList, message.moisture])
        setLightList([...lightList, message.light])
        setHumidList([...humidList, message.humidity])
        setTempList([...tempList, message.temperature])
      })
    })
  })

  // total values collected for each KPI
  let totalTemp = 0, totalHumid = 0, totalMoist = 0, totalLight = 0 ; 

  for (let i=0; i < tempList.length; i++) {
    totalTemp += tempList[i]
    totalHumid += humidList[i]
    totalMoist += moistList[i]
    totalLight += lightList[i]
    

  }

  console.log(lightList)

  //average values for each kpi
  let tempAvg = (totalTemp / tempList.length).toFixed(2)
  let moistAvg = (totalMoist / moistList.length).toFixed(2)
  let lightAvg = (totalLight / lightList.length).toFixed(2)
  let humidAvg = (totalHumid / humidList.length).toFixed(2)
  return (
    <div>          
      <div className='flex overflow-auto'>
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
                       
    </div>
  )
}

export default Dashboard