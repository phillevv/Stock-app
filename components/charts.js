import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component {
    

    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ["10","11","12","13","14","15","16","17","18","19","20"],
                datasets: [
                    {
                        label: "Close",
                        data: [
                            160,
                            158,
                            156,
                            188,
                            148,
                            168,
                            178,
                            165,
                            175,
                        ],
                        backgroundColor: [
                            'rgba(0, 0, 0, 0.1)',
                      
                        ],
                        pointBackgroundColor: [
                            'rgba(0, 0, 0, 0.1)',
                        ]
                    }
                ]
            }
        }
    }
    
 
    render() { 
        return ( 

            <div className="chart">
                <Line
                data={this.state.chartData}
       
                options={{maintainAspectRatio: false
                }}
/>
            </div>

         );
    }
}
 
export default Chart;