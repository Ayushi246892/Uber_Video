import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Captaindetails from '../component/Captaindetails'
import Ridepopup from '../component/Ridepopup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Confirmridepopup from '../component/Confirmridepopup'

const Captainhome = () => {
     
    const [ridepopuppanel,setridepopuppanel] = useState(true)
    const [confirmridepopuppanel,setconfirmridepopuppanel] = useState(false)

      const ridepopuppanelRef = useRef(null)
      const confirmridepopuppanelRef = useRef(null)

    

      useGSAP(function(){
        if(ridepopuppanel){
          gsap.to(ridepopuppanelRef.current,{
            transform:'translateY(0)'
          })
        }
        else{
          gsap.to(ridepopuppanelRef.current,{
            transform:'translateY(100%)'
          })
        }
      },[ridepopuppanel])

      useGSAP(function(){
        if(confirmridepopuppanel){
          gsap.to(confirmridepopuppanelRef.current,{
            transform:'translateY(0)'
          })
        }
        else{
          gsap.to(confirmridepopuppanelRef.current,{
            transform:'translateY(100%)'
          })
        }
      },[confirmridepopuppanel])


  return (
    <div className='h-screen '>
       <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' 
        src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' 
        alt=''/>

        <Link to='/captainhome' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
       </div>
       <div className='h-3/5'>
       <img 
       src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' 
       className='h-full w-full object-cover' 
       alt=''/>
       </div>

       <div className='h-2/5 p-6'>
           <Captaindetails />
       </div>

       <div ref={ridepopuppanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
          <Ridepopup setridepopuppanel={setridepopuppanel} setconfirmridepopuppanel={setconfirmridepopuppanel}/>
       </div>
       <div ref={confirmridepopuppanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
          <Confirmridepopup setconfirmridepopuppanel={setconfirmridepopuppanel} setridepopuppanel={setridepopuppanel}/>
       </div>
    </div>
  )
}

export default Captainhome
