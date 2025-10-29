import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const Fname="ganesh"
// function MyButton({fName,lName,age}) {
//   return (
//     <div><h1>Fname:{fName}</h1>
//     <h1>Lname:{lName}</h1>
//     <h1>age:{age}</h1>
//     <hr></hr></div>
    
//   );
// }

function App() {

  var [Fname,setFname]=useState("sravs")
  return (
<div>
  {Fname} <button onClick={()=>{setFname(Fname+"1")}}>click me</button>
</div>

//     <div>
// {/* <MyButton fName="majjari" lName="ganesh" age={16}/>
// <MyButton fName="majjari" lName="ganesh" age={16}/>
// <MyButton fName="majjari" lName="ganesh" age={16}/> */}
//     </div>
  );
}

export default App;
