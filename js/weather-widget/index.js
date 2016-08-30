import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import Api from './api.js';

export default React.createClass({
  getInitialState() {
    return {
      location: this.props.location,
      now: {},
      forecast: []
    }
  },

  componentDidMount() {
    this.updateLocation(this.props.location);
  },

  updateLocation(location) {
    Api.get(location).then((data) => {
      this.setState({
        location: data.query.results.channel.location,
        now: data.query.results.channel.item.condition,
        forecast: data.query.results.channel.item.forecast
      });
    });
  },

  change: function(event) {
    this.updateLocation(event.target.value)
  },

  render() {
    if (!this.state.forecast){
      return <div className='loading'>Loading...</div>
    }

    return (
      <div className="weather-widget">
        <div className="location">
          {this.state.location.city}, {this.state.location.region}
          <select onChange={this.change}
            value={this.state.location.city +
              ',' + this.state.location.region}
            selected={this.state.location.city +
              ',' + this.state.location.region} className="location-select">
            <option value="Fairfax, VA">Fairfax, VA</option>
            <option value="Providence, RI">Providence, RI</option>
            <option value="Washington, DC">Washington, DC</option>
            <option value="New York, NY">New York, NY</option>
          </select>
        </div>
        <div className={'today ' + 'bg-' + this.state.now.code}>
          <div className='today-temperature'>{this.state.now.temp}&deg;</div>
          <div>
            <i className={'icon-' + this.state.now.code}></i>
            <div className='week-day-temperature'>{this.state.now.text}</div>
          </div>
        </div>
        <ul className='week-forecast'>
        {this.state.forecast.map((v, k) => {
          if (k < 6 && k > 0) {
            return (<li key={k} className={'day-'+k}>
              <div className='inner'>
                 <div className='week-day'>{v.day}</div>
                 <div className='week-day-temperature'>{v.low}&deg;/{v.high}&deg;</div>
                 <i className={'icon-' + v.code}></i>
              </div>
            </li>);
          }
        })}
        </ul>
      </div>
    );
  },
});
