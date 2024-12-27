import { useGSAP } from '@gsap/react'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import FinishRide from '../component/Finishride'


const Captainriding = () => {

    const [finishridepanel,setfinishridepanel] = useState(false)
    const finishridepanelRef = useRef(null)

    useGSAP(function(){
        if(finishridepanel){
          gsap.to(finishridepanelRef.current,{
            transform:'translateY(0)'
          })
        }
        else{
          gsap.to(finishridepanelRef.current,{
            transform:'translateY(100%)'
          })
        }
      },[finishridepanel])


  return (
    <div className='h-screen'>
       <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' 
        src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' 
        alt=''/>

        <Link className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
       </div>
       <div className='h-4/5'>
       <img 
       src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' 
       className='h-full w-full object-cover' 
       alt=''/>
       </div>

       <div onClick={()=>{
        setfinishridepanel(true)
       }} className='h-1/5 p-6 flex items-center justify-between relative bg-yellow-400'>
       <h5 onClick={()=>{
         
        }}
         className='p-1 text-center w-[95%] absolute top-0 '>
        <i className="ri-arrow-up-wide-line text-3xl text-gray-800"></i>
        </h5>
          <h4 className='text-xl font-semibold'>4 KM Away </h4>
          <button className=' bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
       </div>

       <div ref={finishridepanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
          <FinishRide setfinishridepanel={setfinishridepanel}/>
       </div>
    </div>
  )
}

export default Captainriding
