import React, {Component} from 'react';
import WeatherWidget from './weather-widget'

let App = React.createClass( {
  render() {
    let Widget = WeatherWidget;
    return (
      <div className="main-wrapper">
        <Widget location="Fairfax, VA"/>
      </div>
    );
  }
}

export default App;
