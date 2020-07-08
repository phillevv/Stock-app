import React, { useState,Component } from 'react';
//import Chart from './charts';
import { Card } from 'react-bootstrap';
import {Line ,defaults} from 'react-chartjs-2';
defaults.global.defaultFontColor = 'white';



const api = {
    key:"YZ5SR4MU6VDKI0UA",
    base:"https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol="
}





function Stocks() {

    
    const dateBuilder = (d) => {
        let months = ["01","02","03","04","05","06","07","08","09","10","11","12"];
        let days = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];

        let date = days[d.getDate() -1];
        let month = months[d.getMonth()];
        let year = d.getFullYear() ;

        return `${year}-${month}-${date}`
    }


    class Chart extends Component {
    

        constructor(props) {
            super(props);
            this.state = {
                chartData: {
                    type: 'Line',
                    labels: ["Open","Close"],
                    datasets: [
                        {
                            label: "Volume",
                            data: [
                                (stocks["Time Series (Daily)"][dateBuilder(new Date())]["1. open"]),
                                (stocks["Time Series (Daily)"][dateBuilder(new Date())]["4. close"]),
                            ],
                            backgroundColor: [
                                'rgba(0, 0, 0, 0.0)',
                          
                            ],
                            pointBackgroundColor: [
                                'rgba(0, 0, 0, 0.9)',
                            ],
                            borderColor: [ 
                                'rgba(60, 179, 113, 0.8)',
                            ],
                            pointBorderColor: [
                                'rgba(60, 179, 113, 0.8)',
                            ],

                            defaultFontColor: [
                                'rgba(60, 179, 113, 0.8)',
                            ],
                            hoverBackgroundColor: [
                                 'rgba(60, 179, 113, 0.8)',
                            ],
                        }
                    ]
                }
            }
        }
        
     
        render() { 
            return ( 
    
                <div className="chart text-white">
                    <Line
                    data={this.state.chartData}
           
                    options={{maintainAspectRatio: false
                    }}
    />
                </div>
    
             );
        }
    }

    const [query,setQuery] = useState ('');
    const [stocks,setStocks] = useState ('');

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}${query}&apikey=${api.key}`)
            .then(res => res.json())
            .then(result => {
            setStocks(result);
            setQuery('');  
            console.log(result);
            });
        }
    }



    return (
        <div className="Weatherapp text-center ">
                <main>
                    <div className="search-box p-2 m-2">
                        <input type="text" className="search-bar" placeholder="Search.."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                        ></input>
                      
    
                   
                    </div>
                    {(typeof (stocks["Meta Data"]) != "undefined") ? (
                <div className="location-box">
                    <div>
                    <div className="location text-primary"> {stocks["Meta Data"]["1. Information"]} </div>
                 
                  
                </div>
                <div className="stock-box">
    
               


                    <Card className="text-center p-2 bg-dark">
  <Card.Header><div id="name" className="stocka text-success">{(stocks["Meta Data"]["2. Symbol"])}</div>
  <div className="date text-white">{dateBuilder(new Date())}</div>
  </Card.Header>
  <Card.Body>
    <Card.Title>    
                    <div className="stocka text-white">Open {(stocks["Time Series (Daily)"][dateBuilder(new Date())]["1. open"])}</div>
                    <div className="stocka text-white">Close {(stocks["Time Series (Daily)"][dateBuilder(new Date())]["4. close"])}</div>
                    </Card.Title>
    <Chart></Chart>
    
  </Card.Body>
  <Card.Footer className="text-white"></Card.Footer>
</Card>
                



                </div>
                </div>
        ) : ('') }
                
                    
                </main>
             
        </div>
      );
}

export default Stocks;