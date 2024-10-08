import './App.css';

import React, { useState } from 'react';
import Loader from './loader';
import Description from './description';
import weatherImg from './assets/weather.png';
function App() {
  let [city,setCity]=useState("")
  let[wDetails,setwDetails]=useState()
  let [isloading,setloading]=useState(false)
  let getData=(e)=>{
    e.preventDefault()
    setloading(true)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=36a1b11c99e7ae95493528c358082079&units=metric`)
    .then((response)=>response.json())
    .then((finalRes)=>{
      if(finalRes.code=='404'){
        setwDetails(undefined)
      }else{
        // console.log(finalRes);
      setwDetails(finalRes)
       }
       setloading(false)
  })
    setCity('')
  }
  return (
    <div className="w-[100vw] h-[100vh] bg-[#96bdc6] flex">
      <div className='max-w-[800px] text-center p-[20px] mx-auto my-auto shadow-2xl shadow-slate-900 rounded-md bg-[#dfdddd]'>
        <h1 className='text-[40px] font-bold'>Weather App</h1>
        <form onSubmit={getData} className='flex justify-between mt-[30px] items-center'>
          <input type='text' value={city} onChange={(e)=>setCity(e.target.value)} className='h-[45px] p-[10px] w-[70%] text-[18px] width-[100%] border-none outline-none rounded' placeholder='Enter city Name'></input>
          <button className='border-none px-[9px] py-[12px] w-[29%]  text-[12.5px] text-white rounded font-semibold bg-[#bd3808] ease-in cursor-pointer hover:bg-[#8e2904]'>Get Weather</button>
        </form>
        <div className='w-[400px] min-h-[250px] mx-auto bg-orange-200 bg-opacity-60 shadow-lg mt-[20px] p-[25px] relative'>
         <div className={`absolute left-[30%] top-[18%] ${isloading?'':'hidden'}`}><Loader/></div>
          {wDetails!==undefined && !isloading?
          <>
            <img src={`https://openweathermap.org/img/wn/${wDetails?.weather?.[0].icon}.png`} className='h-[70px] w-[70px]  ' />
            <h3 className='font-bold text-[30px] mt-[-60px] text-indigo-800'>{wDetails?wDetails.name:''}<span className='ml-1 text-indigo-950'>{wDetails?.sys?.country}</span></h3>
            <p className='font-bold text-orange-800 text-[28px] mt-[-5px]'> {wDetails?.main?.temp?wDetails.main.temp : 'Temperature unavailable'}<span className={`font-normal text-[20px] text-teal-800 italic ${wDetails? '':'hidden'}`}> (Feels like :{wDetails?.main?.feels_like|| "NA"})</span></p>
            <div className='mt-[10px] mb-20px font-semibold text-[20px]'>
              <Description wDetails={wDetails}/>
           </div>
          </>
          : !isloading?(
          <>
          <img src={weatherImg} className='m-auto'></img>
          <p className='font-bold text-[20px]'>Enter city name to know more</p>
           </>
          ):null}
        </div>
      </div>
    </div>
  );
}

export default App;