import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/navigation/Navbar';
import Routes from './components/navigation/Routes';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const peopleData = [
  {first: 'Mark', last: 'Otto', handle: '@motto', id: '1'},
  {first: 'Carl', last: 'Reno', handle: '@ceno', id: '2'},
  {first: 'Steve', last: 'Smith', handle: '@ssteve', id: '3'},
];

const planetsData = [
  {name: 'Earth', diameter: '12,7', id: '3'},
  {name: 'Mars', diameter: '6,8', id: '4'},
  {name: 'Jupiter', diameter: '139,8', id: '5'},
];

const starshipsData = [
  {name: 'Basilisk', type: 'Battlecruiser', speed: '300', id: 'HWSS000436'},
  {name: 'Cossack', type: 'Cruiseship', speed: '73', id: 'LWSS007234'},
  {name: 'Duke', type: 'Transporter', speed: '60', id: 'STS000436'},
];

const data = { peopleData, planetsData, starshipsData }

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes initialData={ data }/>
    </BrowserRouter>
  );
}
