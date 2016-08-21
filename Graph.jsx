import React from 'react';
var LineChart = require("react-chartjs").Line;

class Graph extends React.Component {

  render () {
  	var chartData = {
	    labels: this.props.data.labels,
	    datasets: [
	        {
	            label: this.props.data.name,
	            fill: true,
	            lineTension: 0.1,
	            fillColor: "rgba(220,220,220,0.2)",
	        	strokeColor: "rgba(220,220,220,1)",
	            borderColor: "rgba(220,220,220,1)",
	            borderCapStyle: 'butt',
	            borderDash: [],
	            borderDashOffset: 0.0,
	            borderJoinStyle: 'miter',
	            pointBorderColor: "rgba(220,220,220,1)",
	            pointBackgroundColor: "#fff",
	            pointBorderWidth: 1,
	            pointHoverRadius: 5,
	            pointHoverBackgroundColor: "rgba(220,220,220,1)",
	            pointHoverBorderColor: "rgba(220,220,220,1)",
	            pointHoverBorderWidth: 2,
	            pointRadius: 1,
	            pointHitRadius: 10,
	            data: this.props.data.dataset,
	            spanGaps: true,
	        },
	        {
	            label: "SMA",
	            fill: true,
	            lineTension: 0.1,
	            fillColor: "rgba(75,192,192,0.2)",
	        	strokeColor: "rgba(75,192,192,1)",
	            borderColor: "rgba(75,192,192,1)",
	            borderCapStyle: 'butt',
	            borderDash: [],
	            borderDashOffset: 0.0,
	            borderJoinStyle: 'miter',
	            pointBorderColor: "rgba(75,192,192,1)",
	            pointBackgroundColor: "#fff",
	            pointBorderWidth: 1,
	            pointHoverRadius: 5,
	            pointHoverBackgroundColor: "rgba(75,192,192,1)",
	            pointHoverBorderColor: "rgba(75,192,192,1)",
	            pointHoverBorderWidth: 2,
	            pointRadius: 1,
	            pointHitRadius: 10,
	            data: this.props.data.smaData,
	            spanGaps: true,
	        }
	    ],
	};
	var options = {
		tooltips: {
			"mode":"x-axis"
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
    return <LineChart data={chartData} options={options} width="600" height="250"/>
  }
}

export default Graph;