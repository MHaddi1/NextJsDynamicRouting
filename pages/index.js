import Item from "../components/Item"
import { getAllEvents } from "../DUMMY_DATA";

export default function Home() {
  const events = getAllEvents();
  // console.log(events);
  return (
    <div className="bg-gray-300 min-h-screen p-5 w23 flex flex-col items-center justify-start">
      {events.map((item) => {
        
       return <Item key={item.id} event={item}/>
      })}

    </div>
  )
}
