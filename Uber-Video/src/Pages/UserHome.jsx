import React, { useRef, useState } from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import Locationsearchpanel from '../component/Locationsearchpanel';
import Vehiclepanel from '../component/Vehiclepanel';
import ConfirmRide from '../component/ConfirmRide';


function UserHome() {
  const [pickup,setpickup] = useState('')
  const [destination,setdestination] = useState('')
  const [panelopen,setpanelopen] = useState(false)
  const [Vehiclepanelopen,setVehiclepanelopen] = useState(false)
  const [confirmridepanel,setconfirmridepanel] = useState(false)
  const panelRef = useRef(null)
  const panelcloseRef = useRef(null)
  const vehiclepanelRef = useRef(null)
  const confirmridepanelRef = useRef(null)

     
  const submitHandler = (e) =>{
    e.preventDefault()
  }

  useGSAP(function(){
     if(panelopen){
      gsap.to(panelRef.current,{
        height:'70%',
        padding:24
        // opacity:1
      })
      gsap.to(panelcloseRef.current,{
        opacity:1
      })
     }
     else{
      gsap.to(panelRef.current,{
        height:'0%',
        padding:0
        // opacity:0
      })
      gsap.to(panelcloseRef.current,{
        opacity:0
      })
     }
  },[panelopen])

  useGSAP(function(){
    if(Vehiclepanelopen){
      gsap.to(vehiclepanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(vehiclepanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[Vehiclepanelopen])

  useGSAP(function(){
    if(confirmridepanel){
      gsap.to(confirmridepanelRef.current,{
        transform:'translateY(0)'
      })
    }
    else{
      gsap.to(confirmridepanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmridepanel])

  return (
    <div className='h-screen relative overflow-hidden'>
       <img 
       src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png'
       alt=''
       className='w-16 absolute left-5 top-5'
       />
       <div  className='h-screen w-screen'>
        <img src='https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif' className='h-full w-full object-cover' alt=''/>
       </div>
       <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
         <div className='h-[30%] p-6 bg-white relative'>

          <h5 ref={panelcloseRef} onClick={()=>{
            setpanelopen(false)
          }} className='absolute opacity-0 right-6 top-6 text-2xl '>
          <i className="ri-arrow-down-wide-line"></i>
          </h5>

         <h4 className='text-2xl font-semibold'>Find a trip</h4>
         <form onSubmit={(e)=>{
           submitHandler(e)
         }}>

           <div className="line absolute h-16 w-1 top-[35%] left-10 bg-gray-900 rounded-full"></div>
           <input 
           onClick={()=>{
             setpanelopen(true)
           }}
           value={pickup}
           onChange={(e)=>{
              setpickup(e.target.value)
              }}
           className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' 
           type='text' 
           placeholder='Add a Pick-up location'
           />

           <input 
            onClick={()=>{
            setpanelopen(true)
             }}
            value={destination}
            onChange={(e)=>{
               setdestination(e.target.value)
               }}
           className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' 
           type='text' 
           placeholder='Enter your destination'
           />

         </form>
         </div>
         <div ref={panelRef} className='h-0 bg-white'>
               <Locationsearchpanel  setpanelopen={setpanelopen}  setVehiclepanel={setVehiclepanelopen}/>
         </div>
       </div>

       <div ref={vehiclepanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
          <Vehiclepanel setconfirmridepanel={setconfirmridepanel} setVehiclepanelopen={setVehiclepanelopen}/>
       </div>
       <div ref={confirmridepanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
          <ConfirmRide setconfirmridepanel={setconfirmridepanel} setVehiclepanelopen={setVehiclepanelopen} />
       </div>
       <div className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12'>
          
       </div>
    </div>
  );
}

export default UserHome;
