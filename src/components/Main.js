require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

let data=require('./data/jsondata.json');
console.info(data);

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      <span> "let us go"</span>
    <span> "let us go go go"</span>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
