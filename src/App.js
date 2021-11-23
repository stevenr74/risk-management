import './App.css';
import { useEffect } from 'react';
import SideBar from './components/SideBar';

function App() {

  useEffect( () => {
    document.title = 'Risk Management';
  }, []);

  return (
    <div className="App">
      <SideBar />
      <div className="body">

      </div>
    </div>
    
  );
}

export default App;
