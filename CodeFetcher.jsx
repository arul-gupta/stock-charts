import React from 'react';
import GraphList from './GraphList.jsx';
var moment = require("moment");

class CodeFetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     codes:["EICHERMOT.BO", "ICICIBANK.BO", "ASHOKLEY.BO", "BRITANNIA.BO"],
     stocks: ["EICHER MOTORS", "ICICI BANK"]
   }
  }

  componentDidMount() {
    fetchAllCodes();
  }

  fetchAllCodes() {
    var codePromises = this.state.stocks.map(fetchStockCode);
    Promise.all(codePromises)
    .then(function(results) {
        results.forEach(function(item) {
            console.log(item);
        });
    })
    .catch(function(err) {
        console.log("Failed:", err);
    });
  }

  fetchStockCode(stockName) {
    return new Promise((resolve, reject) => {
        var url = `http://www.moneycontrol.com/mccode/common/autosuggesion.php?query=${stockName}&type=1&format=json`;
        var myInit = { method: 'GET',
                       mode: 'cors',
                       cache: 'default' };

        var myRequest = new Request(url);
        var self = this;
        fetch(myRequest,myInit).then(function(response) {
          response.json().then(function(jsonData){
            var code = self.parseStockCode(jsonData);
            resolve(code);
          });
        });
    });
  }

  parseStockCode(jsonData) {
    var str = jsonData[0].pdt_dis_nm;
    var code = str.match(/<span>.*<\/span>/)[0].split(",")[1].trim();
    code = code + ".BO";
    return code;
  }

  render() {
    return (
         <div></div>
      );
  }
}

export default CodeFetcher;

