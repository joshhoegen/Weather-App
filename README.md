## Based off of [React ES6 Webpack Boilerplate](https://github.com/vasanthk/react-es6-webpack-boilerplate)

### Usage

* ```
npm install
npm start
```
* Open http://localhost:5000


### TODO: Color code weather-widget
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
