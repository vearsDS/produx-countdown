import { useEffect } from "react";
import { useState } from "react";
import ChevronIcon from "./icons/ChevronIcon";

const App = () => {
  let date = new Date();
  const endTime = new Date("2024-07-11T20:00:00");
  const newdate = endTime - date;
  const [time, setTime] = useState(newdate);
  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (miliseconds) => {
    let total_seconds = parseInt(Math.floor(miliseconds / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));
    let days = parseInt(Math.floor(total_hours / 24));
    let seconds = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(Math.floor(total_hours % 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
    // return `${days} DAYS : ${hours} HOURS : ${minutes} MINUTES : ${seconds} SECONDS`;
  };
  return (
    <main className='flex flex-col bg-space-pattern h-[100vh]'>
      <div className='flex items-center flex-1 w-full justify-center'>
        <img src='/imgs/bxfull_rectangle_white 1.png'></img>
      </div>
      <div className='flex flex-col bg-service-section bg-cover md:bg-transparent items-center justify-center w-full h-[70%] b-0 md:gap-10 bg-black'>
        <label className=' text-[15px] md:text-[26px] font-normal leading-[41px]'>We are on the way back from the future</label>
        <label className='text-[42px] md:text-[80px] font-bold leading-[42px]'>ARRIVING SOON IN</label>
        <div className='flex text-[42px] md:text-[80px] font-bold leading-[90px] gap-2 '>
          <label className=''>{getFormattedTime(time).days}:</label>
          <label>{getFormattedTime(time).hours}:</label>
          <label>{getFormattedTime(time).minutes}:</label>
          <label>{getFormattedTime(time).seconds}</label>
          <label>HRS</label>
        </div>
        <div className='flex items-center flex-1 gap-1 '>
          <img src='/imgs/instagram.png' />
          <a href='https://www.instagram.com/bastian.produx?igsh=MTkxcXpteTA5YWF1'>Our Instagram</a>
          <ChevronIcon />
        </div>
      </div>
    </main>
  );
};

export default App;
