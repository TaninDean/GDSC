import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideNavBar from './components/SideNavBar';
import Activity from './views/Activity';
import Important from './views/Important';
import Completed from './views/Completed';
import ModificationStoresContext, { ModificationStores } from './stores/ModificationStores';


const Index: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  function setNavbar() {
    setShowNavbar(!showNavbar);
  }

  return (
    <React.StrictMode>
      <Navbar setShowNavbar={setNavbar} />
      <ModificationStoresContext.Provider value={new ModificationStores()}>
        <div className='relative flex p-3 h-[95vh] overflow-hidden'>
          <div className={`transform transition-all duration-500 ease-out`}>
            <SideNavBar showNavbar={showNavbar}/>
          </div>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Activity />}></Route>
              <Route path='/active' element={<Activity />}></Route>
              <Route path='/important' element={<Important />}></Route>
              <Route path='/completed' element={<Completed />} ></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ModificationStoresContext.Provider>
    </React.StrictMode>

  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<Index />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
