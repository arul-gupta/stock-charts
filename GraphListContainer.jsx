import React from 'react';
import GraphList from './GraphList.jsx';
var moment = require("moment");

class GraphListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     codes:["EICHERMOT.BO", "ICICIBANK.BO", "ASHOKLEY.BO", "BRITANNIA.BO"]
   }
  }

  componentDidMount() {
  }

  parseData(jsonData) {
    
  }

  render() {
    return (
         <GraphList data={this.state}/>
      );
  }
}

export default GraphListContainer;