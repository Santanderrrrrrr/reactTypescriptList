import React, { useState } from 'react';
import './App.css';
import AddToList from './components/AddToList';

import List from './components/List'

export interface IState {
  persons:{
    name: string
    age: number | undefined
    note?: string
    url: string
  }[]
}

function App() {

  const [crowd, setCrowd ] = useState([{
    name: "Lebron James",
    age: 36,
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    note: "Allergic to staying on the same team."

  },
{
  name: "kobe",
  age: 48,
  url: " "
}]) //hovering over the crowd piece of state gives you a synopsis of typescript's understanding of what the people variable's type is going to be
    //It will be revealed that the type will be an array of a union of two objects with 4 fields, the fourth being optional if note is not added in the second object.


//below is another way to declare the type the useState piece of state is going to have:
const [people, setPeople] = useState<{name: string, age: number, url: string, note?: string}[]>([])

//a more clean way of doing it would be using intefaces and implementing them. 
//the interface is declared outside the component function.
const [persons, setPersons] = useState<IState["persons"]>([
  {
    name: "Lebron James",
    age: 36,
    url: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png",
    note: "Allergic to staying on the same team."

  },
])

//The 2 above methods of declaring state allow you to make references to uninitialized pieces of state cause typescript knows what the fields are supposed to be.
people.map((person) => person.age*22)

  
  return (
    <div className="App">
      <h1>Fun Basketballer Facts</h1>
      <List persons={persons} people={people} />
      {/*When handing down props, you have to define the type the props are 
      going to have or the type of the component being handed the prop to*/}
      <div>
        <AddToList persons={persons} setPersons={setPersons}/>
      </div>
    </div>
    
  );
}

export default App;
