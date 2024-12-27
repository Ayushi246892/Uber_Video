import React from 'react'

function Locationsearchpanel(props) {

  console.log(props);
  

  const locations = [
    "24A, Near Kapoor's Cafe, Sheryians Coding School, Bhopal",
    "22B, Near Malhotra's Cafe, Sheryians Coding School, Bhopal",
    "20C, Near Singhai's Cafe, Sheryians Coding School, Bhopal",
    "18D, Near Sharma's Cafe, Sheryians Coding School, Bhopal"
  ]

  return (
    <div>
      {
        locations.map(function(elem,idx){
          return <div key={idx} onClick={()=>{
            props.setVehiclepanel(true)
            props.setpanelopen(false)
          }} className='flex gap-4 border-2 p-3 rounded-xl my-2 border-gray-50 active:border-black items-center justify-start'>
          <h2 className='bg-[#eee] h-8  w-12 flex items-center justify-center rounded-full'>
          <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className='font-medium'>{elem}</h4>
        </div>

        })
      }
    </div>
  )
}

export default Locationsearchpanel
