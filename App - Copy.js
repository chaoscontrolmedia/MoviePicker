import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';



const Person = (props) => {
  return(
    <>
    <h1>Name: {props.name}</h1>
    <h1>Last Name:  {props.lastName}</h1>
    <h1>Age:  {props.age}</h1>

    </>
  ) 
}

const App = () => {
  const[counter, setCounter] = useState(0);
  useEffect (() => {
    //alert('Ur hot')
    setCounter(100);
  },[counter]) ;

  const name = 'Chaos';
  const isNameShowing = true;


  return (
    <div className="App">
      <button onClick = {() =>setCounter((prevCount) =>prevCount + 5 )}>+</button>
      <h1>{counter}</h1>
      <button onClick = {() =>setCounter((prevCount) =>prevCount - 5 )}>+</button>
      <h1>Yo, </h1>
      <Person 
      name = "Tifa" 
      lastName = 'Lockhart' 
      age = {22} />

      <Person name = 'Cloud' 
      lastName = 'Strife' 
      age = {22} />

      <h1>{name}</h1>
      <h1>Hey {isNameShowing ? name : 'Someone'}</h1>
      { name ? (
      <>
        <h1>{name}</h1>
      </>
      ) : (
        <>
        <h1>test</h1>
        <h1>test</h1>
        </>
      )}

    </div>
  );
}

export default App;
