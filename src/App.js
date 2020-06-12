import React from 'react';
import logo from './logo.svg';
import './App.css';



let items = ["milk", "sugar", "gun"]
let tmp = "hihihihj"

function App() {
  return (
    <div className="App">
      <Form></Form>
      <List></List>
    </div>
  );
}

class Form extends React.Component{

  render(){
    return(
      <div>
        <h3>i am the form</h3>
        <input></input>
        <button onClick={addMe}>add</button>
      </div>
    )
  }
}


function addMe(){
  console.log("hello")
}
let x = <h1>how about now</h1>

class List extends React.Component{
  render(){
    return(
      <div>
       <h6>and i'm the list</h6> 
        {
          items.map((item)=> 
            <li key={item.toString()}>
              {item}
              <button>X</button>
            </li>
          )
        }
      </div>
    )
  }
}

export default App;
