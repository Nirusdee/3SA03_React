import React from 'react';
import './App.css';
import WordCard from './WordCard';

const word = "Hello";

function App() {
  var word = "";
  var rand = Math.floor(Math.random()*12)+1;
  if(rand == 1) {
    word = "Electrical";
  }
  else if(rand == 2){
    word = "Biomedical";   
  }
  else if(rand == 3){
    word = "Mechanical";
  }
  else if(rand == 4){
    word = "Mechatronics";
  }
  else if(rand == 5){
    word = "Civil";
  }
  else if(rand == 6){
    word = "Environmental";
  }
  else if(rand == 7){
    word = "Industrial";   
  }
  else if(rand == 8){
    word = "Manufacturing";
  }
  else if(rand == 9){
    word = "Mining";
  }
  else if(rand == 10){
    word = "Material";
  }
  else if(rand == 11){
    word = "Chemical";
  }
  else if(rand == 12){
    word = "Computer";
  }

  return (
    <body>
      <center><br></br><h1>Welcome to Quiz Branch in engineering</h1><br></br></center>
      <h2>Click the random button to change the question and click the answer button to see the solution.</h2>
      <button className="button button1"><a href="http://localhost:3000/" >Random</a></button>
      <button className="button button2" onClick={() => answer(word)}>Answer</button>
      <h2>Rearrange the characters correctly.</h2>
      <div>
        <WordCard value={word}/>
      </div> 
    </body>
  );
}
export default App;

function answer(word){
  alert("The answer is "+word)
}