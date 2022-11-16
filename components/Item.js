import React from 'react'
import Image from 'next/image'
import {useRouter} from "next/router"
const Item = ({event}) => {
  
 const router = useRouter();
//  console.log(event);
  return (
    
    <div className="bg-white w-8/12 flex m-3 rounded-lg">
      
    <Image src={event.image} alt="imge"
    width={200}
    height={300}/>
    <div className="flex-1 p-5">
      <h4 className="text-xl font-bold">{event.title}</h4>
      <h4 className="text-lg font-bold">{event.date}</h4>
      <p className="text-gray-200">{event.location}</p>
      
      <div  className="flex items-end justify-end">
        <button 
          className="bg-red-400 text-white text-bold justify-end px-3 py-2 rounded-md hover:bg-green-500" 
          onClick={()=>router.push("/events/[id].js" + event.id)}
        >
          Explore
        </button>
      </div>

    </div>
    </div>
  )
}

export default Item