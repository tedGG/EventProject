import React,{Component} from 'react'
import {Jumbotron,Col,Image,Card,Accordion,Badge,Row,Container} from 'react-bootstrap'
import axios from 'axios';
import { Button,Header } from 'semantic-ui-react'


export default class EventList extends Component{


    constructor(props){
        super(props);
        this.state = {
            events : [],
            images:''
        };
    }

    componentDidMount(){        
        this.findAllLikedEvents();   
        //this.getImg();     
    }

   
    findAllLikedEvents(){
        axios.get("http://localhost:8080/events/getAllLikedEvents")
        .then(response => response.data)
        .then((data)=>{
            this.setState({events: data})
        })
    }

     
    getImg = ()=>{
        axios.get("http://localhost:8080/events/getImage",{responseType: 'arraybuffer'})
        .then(response=>{
               this.setState({images: Buffer.from(response.data, 'binary').toString('base64')})  
        })    
    }
   
    deleteEvent = (eventId) =>{
        axios.delete("http://localhost:8080/events/deleteLikedEvent/"+eventId)
        .then(response=>{
            if(response.data != null){
                this.setState({
                    events: this.state.events.filter(event => event.idEvent!==eventId)
                })
            }
        })    
    }

    render() {
            return(
            <Jumbotron>
                <Header as='h3' dividing>
                   Liked events:
                </Header>
            <Container>
            <Row>
            {
        
            this.state.events.map(event => (
              
              <Col xs="4">
               
                <Card style={{ width: '18rem' }}>
                <Card.Img key={event.idEvent} variant="top" src={"data:image/png;base64," + event.selectedFile}  />
                <Card.Body key={event.idEvent}>
                    <Card.Text>
                    {event.description}
                    </Card.Text>
                    <Card.Text>
                    {event.nameEvent}
                    </Card.Text>
                    <Card.Text>
                    {event.timeStartEvent}
                    </Card.Text>
                    <Button className="btn btn-space" variant="primary">Buy</Button>
                    {' '}
                    <Button className="btn btn-space" variant="danger" onClick={this.deleteEvent.bind(this,event.idEvent)}>Delete</Button>
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
