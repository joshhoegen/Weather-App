![alt tag](https://raw.githubusercontent.com/joshhoegen/Weather-App/master/weather-widget-preview.png)

## Based off of [React ES6 Webpack Boilerplate](https://github.com/vasanthk/react-es6-webpack-boilerplate)

### Usage

*
```
npm install
npm start
```
* Open http://localhost:5000


### TODO: Better color code weather-widget
Get all icon number and images like so:

```
{range.map((i)=>{
    return (
      <div key={'key--' + i}>
        <div>{i}</div>
        <i className={'icon-' + i}></i>
      </div>
    )
})}
```

Have Fun!
