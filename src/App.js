import './App.css';
import './components/RiskTolerance.css'
import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import RiskTolerance from './components/RiskTolerance.js';
import Home from './components/Home.js';

function App() {
 const [page, setPage] = useState(0);
 const [sidebar, setSidebar] = useState(false);

  useEffect( () => {
    document.title = 'Risk Management';
  }, []);

  const goToRiskTolerance = () => {
    setPage(1);
  }

  const sidebarSetting = () => {
    setSidebar(!sidebar);
  }

  return (
    <div className="App">
      <SideBar goToRiskTolerance={goToRiskTolerance} sidebarSetting={sidebarSetting}/>
      <div className={sidebar ? "page_body_sidebar_min" : "page_body"}>
        {page === 0 ? <Home /> : null}
        {page === 1 ? <RiskTolerance /> : null}
      </div>
    </div>
    
  );
}

export default App;
