import { useState } from 'react'
import TrainRoute from './TrainRoute'

import './App.css'


  function App() {
  const blueLine = {
    route: 'Blue Line',
    color: '00a1de',
    textColor: 'FFFFFF',
    status: 'Normal Service',
    statusColor: '404040',
    url: 'http://www.transitchicago.com/blueline/',
  };

  const redLine = {
    route: 'Red Line',
    color: 'C60C30',
    textColor: 'FFFFFF',
    status: 'Delayed',
    statusColor: 'FF0000',
    url: 'http://www.transitchicago.com/redline/',
  };

  const greenLine = {
    route: 'Green Line',
    color: '009B3A',
    textColor: 'FFFFFF',
    status: 'Scheduled Maintenance',
    statusColor: 'FFA500',
    url: 'http://www.transitchicago.com/greenline/',
  };

  return (
    <div>
      <h1>CTA Train Routes</h1>
      <TrainRoute {...blueLine} />
      <TrainRoute {...redLine} />
      <TrainRoute {...greenLine} />
    </div>
  );
}


export default App