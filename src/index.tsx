import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideNavBar from './components/SideNavBar';
import Activity from './views/Activity';
import DueSoon from './views/DueSoon';
import Completed from './views/Completed';
import Important from './views/Important';


const Index: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  function setNavbar(){
    setShowNavbar(!showNavbar);
  }
  return (
    <React.StrictMode>
      <Navbar setShowNavbar={setNavbar}/>
      <div className='flex p-3'>
      {showNavbar && <SideNavBar />}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}></Route>
          <Route path='/active' element={<Activity/>}></Route>
          <Route path='/due' element={<DueSoon />}></Route>
          <Route path='/due' element={<DueSoon />}></Route>
          <Route path='/completed' element={<Completed />}></Route>
          <Route path='/important' element={<Important />}></Route>
        </Routes>
      </BrowserRouter>
      </div>
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
