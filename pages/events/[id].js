import React from 'react'
import Image from 'next/image';
import { useRouter } from "next/router"
function EventDescriptionPage() {
  const router = useRouter();
  const eventId = router.query.id;
  console.log(eventId);
  return (
    <div className='bg-gray-300 min-h-screen p-0 m-0 flex flex-col'>

      <div className="bg-blue-500 h-48 m-3 w-23">
        <div className='flex justify-center'>
          <h1 className='text-2xl text-white font-bold my-5 pt-5  '>Programming is Everyone</h1>
        </div>
        <div className=''>
        <div className='flex justify-center'>
          <div className='bg-blue-900 h-56 w-8/12 py-5 flex felx-row rounded-xl'>
            

            
            

            <div className=''>
              <Image 
               className='max-w-full h-auto rounded-full' src="/image.webp" alt="image"
               width={300}
               height={300}
                />
            </div>
            <div className=' px-5 flex flex-col justify-start items-start'>

              <h2 className='text-blue-500'>21-3-2022</h2>
              <h2 className='text-blue-500'>Superior University Shahdara Lahore</h2>

            </div>
          </div>
          </div>
        
        </div>
      </div>
      <div className='mx-auto w-8/12 relative top-36'>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ipsum illum sequi! Laudantium, et nobis labore molestiae laborum, nulla vitae, ex ab reprehenderit</p>
      </div>
    </div>

  )
}

export default EventDescriptionPage