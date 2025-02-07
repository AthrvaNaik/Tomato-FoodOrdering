import React from 'react'
import Navbar from './components/Navbar/Navbar'
import SideBar from './components/Sidebar/SideBar'
import { Routes,Route } from 'react-router-dom'
import Add from './Pages/Add/Add'
import List from './Pages/List/List'
import Orders from "./Pages/Orders/Orders"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {


  const url = "https://tomato-foodordering-backend.onrender.com"

  return (
    <div>
    <ToastContainer/>
      <Navbar/>
      <hr />
      <div className="app-content">
        <SideBar/>
        <Routes>
          <Route path="/add" 
           element={<Add url={url}/>} 
          />
          <Route path="/list" 
           element={<List url={url}/>} 
          />
          <Route path="/orders" 
           element={<Orders url={url}/>} 
          />
        </Routes>
      </div>
    </div>
  )
}

export default App
