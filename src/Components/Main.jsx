import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "./Main.css";

function Main() {
    
  const [dates, setdates] = useState([]);

  const [mood, setMood] = useState();

  const [color, setColor] = useState(null);

  const [mooddate, setmooddate] = useState({});




  const handle = (selectedMood) => 
    {
    if(selectedMood === "yellow") 
    {
      setMood("yellow");
    }
    else if(selectedMood === "green"){
        setMood("green");
    }
    else if(selectedMood === "blue"){
        setMood("blue");}
    else {
      setMood("white"); 
    }
    const selectedDate = dates[color];
    
    setmooddate((prev) => ({
      ...prev,
      [selectedDate]: selectedMood,
    }));

  };




  useEffect(() => {
    const dates = [];
    for (let i = 6; i >= 0; i--) {
      const date = dayjs().subtract(i, "day").format("DD-MM-YYYY");
      dates.push(date);
    }

    setdates(dates);
  }, []);





 const Delete = (date) => {
  if (mooddate[date]) {
    return (
      <button onClick={() => deletee(date)} className="text-white bg-red-500 p-2 rounded ml-4">Delete</button>
    );
  }
  return null;
};






const deletee = (date) =>
    {
  setmooddate(prev => 
    {
    const updated = { ...prev };
    
    delete updated[date]; 
    setMood("white");
    return updated;
  });
};




  return (
    <div className="flex flex-col justify-around h-[310px]" style={{ backgroundColor: mood }}>
      
        
          
            <h1 className="text-center" id="text">Last 7 Days</h1>
          
    

        <div className="flex flex-col" id="body">

          <div className="flex gap-12 justify-center items-center flex-wrap">
            
            {dates.map((date, index) => 
            (
              <div key={index} className="flex flex-wrap"><button className="text-white bg-blue-500 px-4 py-2 rounded hover:bg-blue-600" onClick={() => setColor(index)}>{date}</button> </div>
            ))}
          
          
          </div>

          {color !== null && (
            
            <div className="flex flex-col sm:flex-row justify-center mt-12 items-center gap-4">

              
              <h1 className="mr-4">Choose Mood On Date: <b>{dates[color]}</b></h1>
             
              <div className=" flex gap-4">

                <button onClick={() => handle("yellow")} className="text-white bg-yellow-500 px-4 py-2 rounded">Happy 😄</button>
                <button onClick={() => handle("green")} className="text-white bg-green-500 px-4 py-2 rounded">Neutral 😊</button>
                <button onClick={() => handle("blue")} className="text-white bg-blue-500 px-4 py-2 rounded">Sad 😔</button>
              
              </div>

            </div>
          )}
        </div>

        <h1 className="mt-20 flex justify-center"  id="text">History</h1>

        <div className="flex flex-col gap-2">
          
          
          {dates.map((date, index) => {
            
            let moodText = "";

            if (mooddate[date] === "yellow") 
            {
              moodText = "Happy 😄";
            } 
            else if (mooddate[date] === "green") 
            {
              moodText = "Neutral 😊";
            } 
            else if (mooddate[date] === "blue") 
            {
              moodText = "Sad 😔";
            }

            return (
              <div key={index} className="flex justify-center items-center">
                <h2 className="text-white bg-gray-500 px-7 w-4/5  py-4 rounded">{date} - {moodText} {Delete(date)}</h2>
              </div>
            );
          })}
        </div>
    </div>
  );
}

export default Main;
