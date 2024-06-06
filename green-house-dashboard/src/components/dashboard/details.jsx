import React from 'react'
import Card from '../card'
import LineGraph from '../lineGraph/index.jsx'

function Details(props) {
    
  return (
    <div className='flex'>
        <div className='flex max-w-sm rounded-[20px] overflow-hidden shadow-lg mt-[20px] block-inline bg-white'>
            <img src={`http://localhost:8000/${props.displayedItem['image_id']}.png`} alt='chikwawa' className='w-[400px] h-[400px]' />  
        </div>
        <div className='ml-[20px]'>
          <Card disName={props.vgName}
            thatch={props.displayedItem['thatch']} tin={props.displayedItem['tin']} other={props.displayedItem['other']}/>
        </div>
        <div className='mt-[150px] ml-[-150px]'>
            <LineGraph total={props.imgList} riskList={props.riskList}/>
        </div>
    </div>
  )
}

export default Details