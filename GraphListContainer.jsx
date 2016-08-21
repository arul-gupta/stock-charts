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
    // var startDate = moment().subtract(1, 'year').format();
    // var endDate = moment().format();
    // var query = `select * from yahoo.finance.historicaldata
    //  where symbol="${this.state.code}" and 
    //  startDate="${startDate}" and 
    //  endDate="${endDate}" 
    //  &format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`;
    // var url = `https://query.yahooapis.com/v1/public/yql?q=${query}`;

    // var myInit = { method: 'GET',
    //                mode: 'cors',
    //                cache: 'default' };

    // var myRequest = new Request(url);
    // var self = this;
    // fetch(myRequest,myInit).then(function(response) {
    //   response.json().then(function(jsonData){
    //     window.ad = jsonData;
    //     self.parseData(jsonData);
    //   });
    // });
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