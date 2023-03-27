import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideNavBar from './components/SideNavBar';


const Index: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  function setNavbar(){
    setShowNavbar(!showNavbar);
  }
  return (
    <React.StrictMode>
      <Navbar setShowNavbar={setNavbar}/>
      {showNavbar && <SideNavBar />}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}></Route>
        </Routes>
      </BrowserRouter>
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
