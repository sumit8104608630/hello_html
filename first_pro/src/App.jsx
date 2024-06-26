import './App.css'
import { useState } from 'react'
function App() {
  let [count,countFun]=useState(0);
  const counter=()=>{
    let increment= count+1;
    if(increment>20){
      increment=20
    }
    countFun(increment);
  }
  const decrement=()=>{
    let decrement=count-1;
    if(decrement<0){
      decrement=0;
    }
    countFun(decrement)
  }
  return (
    <>
    <h1>counter app {count}</h1>
    <button onClick={counter}>counter {count}</button>
    <br/>
    <br/>
    <button onClick={decrement}>decrement {count}</button>
    </>
  )
}

export default App
