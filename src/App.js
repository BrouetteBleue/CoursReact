import './App.css';
import {Chiffre } from './components/chiffre.js';
// import {Btn } from './components/btn.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="bg-slate-900 flex flex-col">
          <div className="flex flex-row ">
            <Chiffre text="AC" />
            <Chiffre text="+/-" />
            <Chiffre text="%" />
            <Chiffre text="÷" color="bg-orange-400"/>
          </div>
          <div className="flex flex-row "> 
            <Chiffre text="7" />
            <Chiffre text="8" />
            <Chiffre text="9" />
            <Chiffre text="X" color="bg-orange-400"/>
          </div>
          <div className="flex flex-row "> 
            <Chiffre text="4" />
            <Chiffre text="5" />
            <Chiffre text="6" />
            <Chiffre text="-" color="bg-orange-400"/>
          </div>
          
          <div className="flex flex-row ">
            <Chiffre text="1" />
            <Chiffre text="2" />
            <Chiffre text="3" />
            <Chiffre text="+" color="bg-orange-400" />
          </div>
          <div className="flex flex-row "> 
            <Chiffre text="0" />
            <Chiffre text="," />
            <Chiffre text="=" color="bg-orange-400" />
            </div>
         
          </div>
      </header>
    </div>
  );
}

export default App;
