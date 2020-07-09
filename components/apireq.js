import React, { useState,Component } from 'react';
import { Card,FormControl,Row, Alert,Container, FormGroup} from 'react-bootstrap';
import {Input,Label} from 'reactstrap'; 
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

    const [querys,setQuerys] = useState (dateBuilder(new Date()));
    const [date,setDate] = useState (dateBuilder(new Date()));


    const searches = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}${querys}&apikey=${api.key}`)
            .then(res => res.json())
            .then(result => {
            setQuerys(''); 
            setDate(querys); 
            console.log(querys);
            });
        }
    }

    




    class Chart extends Component {
    

        constructor(props) {
            super(props);
            this.state = {
                chartData: {
                    type: 'Line',
                    labels: ["Open: 05:00","Close 20:00"],
                    datasets: [
                        {
                            label: "",
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
        <div className="Stockapp text-center p-3">
        
                <main>
                    <Container>
                <Row className="justify-content-center">
                
                    <div className="search-box p-2 m-2">    
                    <div>Search for stock symbol</div>
                    <small>Example TSLA, AAPL, DIS</small>
                        <FormControl id="Searcher"  type="text" className="search-bar rounded p-2 m-2 shadow" placeholder="Search.."
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        onKeyPress={search}
                        />
                      
                    </div>
                    
                 </Row>
                 </Container>
                 
                    {(typeof (stocks["Meta Data"]) != "undefined") ? (
                <div className="location-box">
                    <div>
                  
                  
                </div>
                <div className="stock-box">
                <Container>
        
                <Row className="justify-content-center">
                <FormGroup>
            
        <Label for="exampleSelect">Date</Label>
        <Input className="text-center p-2 m-2" type="text" name="select" id="exampleSelect" placeholder="YYYY-MM-DD" onChange={e => setQuerys(e.target.value)}
                        value={querys}
                        onKeyPress={searches}> 
      
      </Input>
      
      </FormGroup>  
      </Row>
                 </Container>

                 


                    <Card className="text-center p-2 bg-dark">
  <Card.Header><div id="name" className="stocka text-success" style={{fontSize: "20px"}}>{(stocks["Meta Data"]["2. Symbol"])}</div>
  <Alert color="success">
  <div className="date text-white"> {date} </div>    </Alert>
  <Alert color="success">
                    <div className="location text-primary"> {stocks["Meta Data"]["1. Information"]} </div>
      </Alert>
  </Card.Header>
  <Card.Body>
    <Card.Title>    
                    <div className="stocka text-white float-left">Open {(stocks["Time Series (Daily)"][date]["1. open"])}</div>
                    <div className="stocka text-white float-right">Close {(stocks["Time Series (Daily)"][date]["4. close"])}</div>
                    <div className="stocka text-success">High {(stocks["Time Series (Daily)"][dateBuilder(new Date())]["2. high"])}</div>
                    <div className="stocka text-danger">Low {(stocks["Time Series (Daily)"][dateBuilder(new Date())]["3. low"])}</div>
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