import React from 'react';
import Graph from './Graph.jsx';
var moment = require("moment");

class GraphContainer extends React.Component {
  constructor(props) {
    super(props);
    this.threshold = 0.04;
    this.state = { name:this.props.name,
     code:this.props.code,
     dataset: [],
     labels: [], 
     smaData: [],
     trendData: {}
   }
  }

  componentDidMount() {
    var startDate = moment().subtract(1, 'year').format();
    var endDate = moment().format();
    var query = `select * from yahoo.finance.historicaldata
     where symbol="${this.state.code}" and 
     startDate="${startDate}" and 
     endDate="${endDate}" 
     &format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=`;
    var url = `https://query.yahooapis.com/v1/public/yql?q=${query}`;

    var myInit = { method: 'GET',
                   mode: 'cors',
                   cache: 'default' };

    var myRequest = new Request(url);
    var self = this;
    fetch(myRequest,myInit).then(function(response) {
      response.json().then(function(jsonData){
        window.ad = jsonData;
        self.parseData(jsonData);
      });
    });
  }

  parseData(jsonData) {
    var data = [], smaData = [];
    var labels = [];
    var sum = 0;
    var quotes = jsonData.query.results.quote;
    var j = 0;

    for (var i = quotes.length-1; i>=0; i--) {
      var quote = quotes[i];
      var closeData = parseInt(quote.Close,10);
      data.push(closeData);
      labels.push(quote.Date);
      if(j<20) {
        j++;
        sum += closeData;
        smaData.push(sum/j);
      } else {
        sum = sum - quotes[i+20].Close + closeData;
        smaData.push(sum/20);
      }
    }
    var trendData = this.findTrend(smaData);
    this.setState({"dataset": data, "smaData": smaData, "labels": labels, "trendData":trendData});
  }

  findTrend(smaData) {
    var trendDetails = {trend:1, rate:""};
    var lastHigh = smaData[0];
    var lastLow = smaData[0];
    var sma = smaData[0];
    for(var i=1;i<smaData.length;i++) {
      sma = smaData[i];
      if(trendDetails.trend == 1) {
        //Up continues
        if(sma >= lastHigh) {
          lastHigh = sma;
        }
        //Change to down, but only if drop is significant
        var dropRatio = (lastHigh-sma)/lastHigh;
        if(dropRatio>this.threshold) {
          trendDetails.trend = -1;
          lastLow = sma;
        }
      } else if(trendDetails.trend==-1) {
        //Down continues
        if(sma<=lastLow) {
          lastLow = sma;
        }
        //Change to up, but only if rise is significant
        var climbRatio = (sma-lastLow)/lastLow;
        if(climbRatio>this.threshold) {
          trendDetails.trend = 1;
          lastHigh = sma;
        }
      }
    }
    if(trendDetails.trend == 1) {
      trendDetails.rate = ((sma-lastLow)/lastLow)*100;
    } else {
      trendDetails.rate = ((lastHigh-sma)/lastHigh)*100;
    }
    return trendDetails;
  }

  render() {
    return (
         <Graph data={this.state}/>
      );
  }
}

export default GraphContainer;