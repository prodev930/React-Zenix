import ReactApexChart from "react-apexcharts";

interface CommanProp {
    chartcolor: string       
}
  
const  HomeChart1 : React.FC<CommanProp> = ({ chartcolor }) => {
    const  series = [
        {
          name: "Net Profit",
          data: [100, 300, 100, 200, 120, 240, 180, 230, 200, 250, 300],
        },
    ];
      
   const options = {
        chart: {
          height: 80,
          //type: "area",
            toolbar: {
                show: false,
            },
            zoom: {
                enabled: false
            },
            sparkline: {
                enabled: true
            }
        },
        colors:[chartcolor],
		dataLabels: {
		  enabled: false,
		},
        legend: {
			show: false,
		},
        
        stroke : {
            show: true,
            width: 3,            
            colors:[chartcolor],
        },
        fill : {
            opacity: 0.9,
            // colors:chartcolor,
            // type: 'gradient', 
            gradient: {
                colorStops:[                     
                    {
                        offset: 0,
                        color: chartcolor,
                        opacity: .4
                    },
                    {
                        offset: 0.6,
                        color: chartcolor,
                        opacity: .4
                    },
                    {
                        offset: 100,
                        color: 'white',
                        opacity: 0
                    }
                ],                
            }
        },
		grid: {
			show:false,
			borderColor: '#eee',
			padding: {
				top: 0,
				right: 0,
				bottom: 0,
				left: -1

			}
		},
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0
                }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0
                }
            }
        },
       
        xaxis: {
			categories: ['Jan', 'feb', 'Mar', 'Apr', 'May', 'June', 'July','August', 'Sept','Oct', 'Nov'],
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false
			},
			labels: {
				show: false,
				style: {
					fontSize: '12px',

				}
			},
			crosshairs: {
				show: false,
				position: 'front',
				stroke: {
					width: 1,
					dashArray: 3
				}
			},
			tooltip: {
				enabled: true,
				formatter: undefined,
				offsetY: 0,
				style: {
					fontSize: '12px',
				}
			}
		},
		yaxis: {
			show: false,
		},
        
        tooltip: {
			enabled:false,
			style: {
				fontSize: '12px',
			},
			y: {
				formatter: function(val : any) {
					return "$" + val + " thousands"
				}
			}   
		}
   }   
    return (
      <div id="apexChartsOne">
        <ReactApexChart
          options={options}
          series={series}       
          type="area"
          height={80}
        />
      </div>
    );
  
}

export default HomeChart1;