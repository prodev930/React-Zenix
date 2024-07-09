import React, { Component } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

class Donut extends Component {
  render() {
    const data = {
      weight: 0,
      defaultFontFamily: "Poppins",
      datasets: [
        {
          data: [this.props.value, 100 - this.props.value],
          borderWidth: 0,
          backgroundColor: [
            this.props.backgroundColor,
            this.props.backgroundColor2,
          ],
        },
      ],
    };

    const options = {
		plugins:{
		  //width: 80,
		 // cutoutPercentage: 10,
		  responsive: false,
		   tooltips: { enabled: false },
		},
		cutout: '75%',
      maintainAspectRatio: true,
     
      hover: { mode: null },
    };
    return (
      <div className="donught-chart" style={{ marginTop: "-10px" }}>
        <Doughnut data={data} options={options} height={120} width={120} />
      </div>
    );
  }
}

export default Donut;
