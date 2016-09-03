import React from 'react';
var LineChart = require("react-chartjs").Line;

class Graph extends React.Component {

  render () {
  	var bgColor = this.props.data.trend == 1 ? "green" : "red";
  	var col = "rgba(220,220,220,1)";
  	var smaCol = bgColor;
  	var chartData = {
	    labels: this.props.data.labels,
	    datasets: [
	        {
	            label: this.props.data.name,
	            fill: true,
	            lineTension: 0.1,
	        	strokeColor: col,
	            borderColor: col,
	            borderDashOffset: 0.0,
	            borderJoinStyle: 'miter',
	            pointBorderColor: col,
	            pointBackgroundColor: "#fff",
	            pointBorderWidth: 1,
	            pointHoverRadius: 5,
	            pointHoverBackgroundColor: col,
	            pointHoverBorderColor: col,
	            pointHoverBorderWidth: 2,
	            pointRadius: 1,
	            pointHitRadius: 10,
	            data: this.props.data.dataset,
	            spanGaps: true,
	        },
	        {
	            label: "SMA",
	            fill: false,
	            lineTension: 0.1,
	        	strokeColor: smaCol,
	            borderColor: smaCol,
	            borderDashOffset: 0.0,
	            borderJoinStyle: 'miter',
	            pointBorderColor: smaCol,
	            pointBackgroundColor: "#fff",
	            pointBorderWidth: 1,
	            pointHoverRadius: 5,
	            pointHoverBackgroundColor: smaCol,
	            pointHoverBorderColor: smaCol,
	            pointHoverBorderWidth: 2,
	            pointRadius: 1,
	            pointHitRadius: 10,
	            data: this.props.data.smaData,
	            spanGaps: true,
	            backgroundColor: bgColor
	        }
	    ],
	};
	var options = {
		tooltips: {
			"mode":"x-axis"
		},
		legend: {
			fullWidth: true
		}
 //    scales: {
 //    xAxes: [{
 //        labels: {
 //            userCallback: function(dataLabel, index) {
 //                return  '@@@';
 //            }
 //        }
 //    }]
	// }
	};
    var chart = <LineChart data={chartData} options={options} width="600" height="250"/>;

    return chart;
  }
}

export default Graph;