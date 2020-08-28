import React, { Component } from 'react';
import AvocadoToast from "./Component/avocadoToast";
import Spaghetti from "./Component/spaghetti";
import Instructor from "./Component/instructor";
import './App.css';

class App extends Component {
  render(){
    return (
      <div className="App">
       <AvocadoToast 
          title="Pasta"
          ingredients={['Flour','Water']}
          instructions="Mix ingredients"
          img="spaghetti.jpg"
        />
       <Spaghetti />
       <Instructor />
      </div>
    );
   }
}
 


export default App;
