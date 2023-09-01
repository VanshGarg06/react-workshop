// import logo from "./logo.svg";
import people from "./people";
import React, { useEffect, useState } from 'react';
import "./App.css";
let counter=0;

function App() {
  const [data,setdata] = useState(people);

  const [count,setCount] = useState(-1);

  

  useEffect(()=>{
    setCount(count+1)
  },[data]);


  const removeItem = (data,individual)=>{
      setdata([...data].filter((item)=>{return item !== individual}));
      
  }
  return (
    <>
      <div className="main">
        <h1>Birthdays</h1>
        {data.map((person) => {
          return (
            <>
              <div className="container">
                <div className="image">
                  <img src={person.image} alt="person" />
                </div>
                <div className="personal">
                  <p>{person.name}</p>
                  <p>{person.age} years</p>
                </div>
                <div className="birthday">
                  <p>Birthday: {person.birthdate}</p>
                </div>
                <div className="btn-remove">
                  <button type="button" onClick={()=>removeItem(data,person)}>
                    <img src="./images/RemoveBOx.png" alt="remove" />
                  </button>
                </div>
              </div>
            </>
          );
        })}
        <button type="button" className="remove-all" onClick={()=>setdata([])}>Clear All</button>
      </div>
      <p className="person-remove">People Removed: {count}</p>
    </>
  );
}

export default App;
