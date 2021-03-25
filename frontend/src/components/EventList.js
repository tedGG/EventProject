import React,{Component} from 'react'
import {Jumbotron,Button,Col,Image,Card,Accordion,Badge,Row,Container} from 'react-bootstrap'
import axios from 'axios';

export default class EventList extends Component{


    constructor(props){
        super(props);
        this.state = {
            events : []
        };
    }

    componentDidMount(){        
        this.findAllEvents();
    }

    findAllEvents(){
        axios.get("http://localhost:8080/events/event")
        .then(response => response.data)
        .then((data)=>{
            this.setState({events: data})
        })
    }
    // deleteEvent = (eventId) =>{
    //     axios.delete("http://localhost:8080/registration/deleteUser"+userId)
    //     .then(response=>{
    //         if(response.data != null){
    //             this.setState({
    //                 users: this.state.users.filter(user => user.id!==userId)
    //             })
    //         }
    //     })    
    // }


    render() {
        console.log(this.state.events)
        return(
            <Jumbotron>
        <Container>
            <Row>

            {
            this.state.events.map(event => (
              <Col xs="4">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://musin.zp.ua/image/cache/catalog/afisha/2019/the%20hardkiss-350x496.jpg" />
                <Card.Body key={event.id}>
                    <Card.Title>{event.name_event}</Card.Title>
                    <Card.Text>
                    {event.description}
                    </Card.Text>
                    <Card.Text>
                    {event.date}
                    </Card.Text>
                    <Card.Text>
                    {event.location}
                    </Card.Text>
                    <Card.Text>
                    {event.organizer}
                    </Card.Text>
                    <Card.Text>
                    {event.type_event}
                    </Card.Text>
                    <Button className="btn btn-space" variant="primary">Buy</Button>
                    <Button style={{margin: '20px' }} variant="primary">Like</Button>
                </Card.Body>
                </Card>
              </Col>
            ))
            }
            </Row>
        </Container>
          </Jumbotron>
        )
    }
}
