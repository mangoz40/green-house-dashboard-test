import React from 'react'

function Card(props) {
  let imgElement = ''
  let width
  let leftM
  const Icon = props.icon
    
  return (
    <div className='w-[300px]'>
        <div className={`flex max-w-sm rounded-[20px] overflow-hidden shadow-lg mt-[20px] block-inline bg-white`}>
            <Icon className='w-[60px] h-[80px] mr-[10px] ml-[5px]' style={props.color}/>

            <div className={leftM}>
                <div className='font-bold text-xl mb-2'>{props.kpiName}</div>
                <p>Average: {props.kpiAvg}</p>
                <p>Current: {props.kpiAvg}</p>
                
            </div>
        </div>
    </div>
  )
}

export default Card