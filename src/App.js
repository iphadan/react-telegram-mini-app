import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  return <Board/>
}

export default App;


export function Board() {

  return <>
  <div className='board-row'>
<Square /> <Square /> <Square />
  </div>
   
  <div className='board-row'>  
  <Square/> <Square/> <Square/>
  </div>

  <div className='board-row'> 
  <Square/> <Square/> <Square/>
  </div>

  </>
}
 function Square(){ 
  const [value,setValue] = useState(null);

  function handleClick(){
    setValue("X");
  }
  return <button className='square' onClick={handleClick}>{value}</button>
 }