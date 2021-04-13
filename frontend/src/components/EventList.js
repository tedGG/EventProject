import React,{Component} from 'react'
import {Jumbotron,Col,Image,Card,Accordion,Badge,Row,Container,Carousel} from 'react-bootstrap'
import axios from 'axios';
import { Button,Header,Icon } from 'semantic-ui-react'

export default class EventList extends Component{

    constructor(props){
        super(props);
        this.state = {
                    events:[],
                    images:null
        };

    }
    componentDidMount(){        
        this.findAllEvents();   
       // this.getImg(); 
    }

    findAllEvents(){
        axios.get("http://localhost:8080/events/event")
        .then(response => response.data)
        .then((data)=>{
            this.setState({events: data})
        })
    }

    getImg = eventId => {
        axios.get("http://localhost:8080/events/getImage/" + eventId,{responseType: 'arraybuffer'})
        .then(response=>{
               this.setState({images: Buffer.from(response.data, 'binary').toString('base64')})  
        })    
    }
   //{params: {id: eventId}
    getLikedEvent = eventId =>{
        axios.get("http://localhost:8080/events/getLikedEvent" + eventId)
        .then(response => response.data)
        .then((data)=>{
            var newData = this.state.events.concat([data]);     
            this.setState({event: newData})
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
    // 
    render() {
            return(
                
                <Jumbotron>
                <Container>
                <Row>
            {
            this.state.events.map(event => (
              <Col xs="4" key={event.idEvent}>
                <Card style={{ width: '18rem' }}  key={event.id}>
                <Card.Img key={event.idEvent} variant="top" src={"data:image/png;base64," + event.selectedFile}  />
                <Card.Body>
                  
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
                    <Button.Group>
                    
                    <Button positive>Buy</Button>
                    <Button.Or />
                    <Button onClick={this.getLikedEvent.bind(this,event.idEvent)}>Like</Button>
                    </Button.Group>

                    <Button animated='fade'>
                        <Button.Content visible>Sign-up for a Pro account</Button.Content>
                        <Button.Content hidden>$12.99 a month</Button.Content>
                    </Button>
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
