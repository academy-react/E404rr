import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import {useState} from "react"

const Taghvim = () => {
  const [value , onChange] = useState(new Date())
  console.log(value);
  return (
        <>
        <div className='   mr-16   mt-5 '>
          <Calendar  className="border border-transparent shadow rounded w-[400px]" value={value} onChange={onChange} 
            locale="fa-IR" nextLabel="بعدی"  next2Label="برو" prev2Label="برگرد" prevLabel ="قبلی"  />
        </div>
        </>

  )
}

export  {Taghvim}