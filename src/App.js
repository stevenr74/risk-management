import './App.css';
import './components/RiskTolerance.css'
import { useEffect } from 'react';
import SideBar from './components/SideBar';
import RiskTolerance from './components/RiskTolerance.js';

function App() {

  useEffect( () => {
    document.title = 'Risk Management';
  }, []);

  return (
    <div className="App">
      <SideBar />
      <div className="body">
        <RiskTolerance />
      </div>
    </div>
    
  );
}

export default App;
