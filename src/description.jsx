import React from 'react'

export default function Description({wDetails}) {
let wDet=wDetails
if(wDet===undefined){
    return
}
  return (
    <div className='flex justify-center'>
            <Card wDet={wDet} idx={1}/>
            <Card wDet={wDet} idx={2}/>
            <Card wDet={wDet} idx={3}/>
    </div>
  )
}

function Card({wDet,idx}){


let ansClass={
    1:{
        classs:"fa-solid fa-droplet",
        data:`${wDet?.main?.humidity??'NA'} %`,
        paraText:"Humidity:",
    },
    2:{
        classs:'fa-solid fa-wind',
        data:`${wDet?.wind?.speed??"NA"} m/s`,
        paraText:"Wind Speed:"
    },
    3:{
        classs:"fa-solid fa-eye",
        data:`${wDet?.visibility??"NA"} miles`,
        paraText:"Visibility:"
    }
   
}

let currentClass = ansClass[idx];  
return (
  <div className='py-[15px] px-[15px] bg-[#ffffffc0] rounded w-[30%] min-h-[30px] m-[8px] text-center'>
    <div className='leading-[120%]'>
      <i className={currentClass.classs}></i>
      <div>
        <p className='text-[18px] font-medium text-black font-serif'>{currentClass.paraText}</p>
        <span className='font-semibold text-[14px] text-indigo-800'>{currentClass.data}</span>
      </div>
    </div>
    </div>
    )
}
