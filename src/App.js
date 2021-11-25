import './App.css';
import './components/RiskTolerance.css'
import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import RiskTolerance from './components/RiskTolerance.js';
import Home from './components/Home.js';
import {CSSTransition} from 'react-transition-group';


function App() {
 const [page, setPage] = useState(0);
 const [sidebar, setSidebar] = useState(false);
 const [bodyAnimation, setBodyAnimation] = useState(false);

 const pages = {
   HOME: "home",
   RISK_TOLERANCE: "risk tolerance",
 }
 const animation_time = 200;


  useEffect( () => {
    document.title = 'Risk Management Basics';
    setPage(pages.HOME);
  }, []);

  const goToRiskTolerance = () => {
    setPage(pages.RISK_TOLERANCE);
  }

  const goToHome = () => {
    setPage(pages.HOME);
  }

  const sidebarSetting = () => {
    setSidebar(!sidebar);
    handleAnimatedBody();
  }

  const handleAnimatedBody = () => {
    setBodyAnimation(true);

    setTimeout(() => {
        setBodyAnimation(false);
    }, animation_time);

}

  return (
    <div className="App">
      <SideBar goToRiskTolerance={goToRiskTolerance} goToHome={goToHome} sidebarSetting={sidebarSetting}/>
      <CSSTransition
        in={bodyAnimation}
        classNames="body_transition"
        timeout={500}
        >
        {
        <div className={sidebar ? "page_body_sidebar_min" : "page_body"}>
          {page === pages.HOME ? <Home /> : null}
          {page === pages.RISK_TOLERANCE ? <RiskTolerance /> : null}
        </div>
        }
      </CSSTransition>
    </div>
    
  );
}

export default App;
