import React from "react";
import ReactApexChart from "react-apexcharts";

class MarketOverviewChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "series1",
          data: [200, 400, 300, 400, 200, 400, 200,300, 200, 300]
        },
        {
          name: "series2",
          data: [500, 300, 400, 200, 500, 200, 400, 300, 500, 200]
        },
      ],
      options: {
        chart: {
          height: 300,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        colors:["#FFAB2D","#00ADA3"],
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        grid:{
			show:false,
			strokeDashArray: 6,
			borderColor: '#dadada',
		},
        yaxis: {
		  labels: {
			style: {
				colors: '#B5B5C3',
				fontSize: '12px',
				fontFamily: 'Poppins',
				fontWeight: 400
				
			},
			formatter: function (value) {
			  return value + "k";
			}
		  },
		},
        xaxis: {
          categories: ["Week 01","Week 02","Week 03","Week 04","Week 05","Week 06","Week 07","Week 08","Week 09","Week 10"],
		  labels:{
			  style: {
				colors: '#B5B5C3',
				fontSize: '12px',
				fontFamily: 'Poppins',
				fontWeight: 400
				
			},
		  }
        },
		fill:{
			type:'solid',
			opacity:0.05
		},
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart" className="market-line">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={320}
        />
      </div>
    );
  }
}

export default MarketOverviewChart;
