import React, { Component } from 'react';
import Chart from './charts';
import Chart1 from './charts1';
import { Card, Button } from 'react-bootstrap';




class Content extends Component {
 
    render() { 

        return (

        <div className="Content">

                <div className="shadow-sm p-3 mb-5 bg-white rounded m-5">

                <div className="text-center">
                <Card className="text-center p-2">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Chart></Chart>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
                
<Card className="text-center p-2">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Chart1></Chart1>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>
                </div>
                </div>
        </div>
        );
}
}

 
export default Content;