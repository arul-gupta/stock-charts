import React from 'react';
import GraphList from './GraphList.jsx';
var moment = require("moment");

class GraphListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     codes: this.props.data.codes
   }
  }

  render() {
    return (
         <GraphList data={this.state}/>
      );
  }
}

export default GraphListContainer;