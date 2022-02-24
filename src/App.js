import React from 'react';
import { Route } from "wouter"
import Home from './pages/Home/Home';
import WeatherInfo from './pages/WeatherInfo/WeatherInfo';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/search/:city" component={WeatherInfo} />
    </div>
  );
}

export default App;
