import { useState } from "react";

const UseStateBasics = () => {
  const [count , setcount] = useState(0);
  const handleClick = () =>{
    setcount(count+1);
  };
  return (
    <div>
       <h1>You Clicked {count} times</h1>
       <button ClassName ='btn' onClick ={handleClick}>Clicked Me </button>
    </div>
  )
};

export default UseStateBasics;
