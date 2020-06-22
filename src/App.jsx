import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/navigation/Navbar';
import Routes from './components/navigation/Routes';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes/>
    </BrowserRouter>
  );
}
