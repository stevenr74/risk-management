import './App.css';
import './components/RiskTolerance.css'
import './components/SideBar.css'
import { useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import RiskTolerance from './components/RiskTolerance.js';
import Home from './components/Home.js';
import {CSSTransition} from 'react-transition-group';

const pages = {
  HOME: "home",
  RISK_TOLERANCE: "risk tolerance",
}
const animation_time = 200;


function App() {
 const [page, setPage] = useState(0);
 const [sidebar, setSidebar] = useState(false);
 const [bodyAnimation, setBodyAnimation] = useState(false);


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
    setBodyAnimation(!bodyAnimation);

  }


  return (
    <div className="App">
      <SideBar goToRiskTolerance={goToRiskTolerance} goToHome={goToHome} sidebarSetting={sidebarSetting}/>
      <CSSTransition
        in={bodyAnimation}
        classNames="body_transition"
        timeout={{
          enter: animation_time,
          exit: 0, //bit of a hack - there is an exit animation, but its set to 
                   //-done instead of -active as -active is not applying the anim for some reason
                   
        }}
        >
        {
        <div className="page_body">
          {page === pages.HOME ? <Home /> : null}
          {page === pages.RISK_TOLERANCE ? <RiskTolerance /> : null}
        </div>
        }
      </CSSTransition>
    </div>
    
  );
}

export default App;
