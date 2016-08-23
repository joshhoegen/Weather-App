import React, {Component} from 'react';
import WeatherWidget from './weather-widget'

export default React.createClass( {
  render() {
    let Widget = WeatherWidget;
    return (
      <div className="main-wrapper">
        <Widget location="Fairfax, VA"/>
      </div>
    );
  }
});
