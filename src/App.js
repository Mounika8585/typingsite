import logo from './logo.svg';
import './App.css';

function App() {

  function start(){
    document.getElementById("root2").style.visibility = "visible";
    document.getElementById("timer").innerHTML = document.getElementById("duration").value * 60;
    document.getElementById('typetext').focus();
  }

  return (
    <div className="App">

      <div id="header">
        <span id="title">Typing Speed Checker</span>

        <span id="tag">GB Mounika</span>
      </div>
      <div id="formbox">
        <h2 id="durtag">Select Duration</h2>
        <select id="duration">
          <option value="1">1 minute</option>
          <option value="3">3 minutes</option>
          <option value="5">5 minutes</option>
        </select> <br/>

        <button id="startb" onClick={start}>Start</button>
      </div>
    </div>
  );
}

export default App;
