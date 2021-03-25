import React,{Component} from 'react'
import {Card,Form,Button,Col, ThemeProvider} from 'react-bootstrap'
import axios from 'axios'

export default class Event extends Component{
    
    constructor(props){
        super(props);
        this.state = this.initialState;
        this.submitEvent = this.submitEvent.bind(this);
        this.eventChange = this.eventChange.bind(this); 
    }

    initialState = {
                id_event:0,
                date:'',
                location:'',
                nameEvent:'',
                description:'',
                organizer:'',
                type_event:'',
                selectedFile: null
           

    }
  

    submitEvent = (event) =>{
        event.preventDefault();
        
        
        const eventData = {
                date: this.state.date,
                location: this.state.location,
                nameEvent: this.state.nameEvent,
                description:this.state.description,
                organizer: this.state.organizer,
                type_event: this.state.type_event,
                selectedFile:this.state.selectedFile
               
        };

        var selectedFile = this.state.selectedFile;
        console.log(selectedFile);

        const json = JSON.stringify(eventData);
        const blob = new Blob([json], {
          type: 'application/json'
        });

        var formData = new FormData();

        formData.append('event', blob);
        formData.append('image', selectedFile);

        axios.post('http://localhost:8080/events/addEvent', formData, {headers:{'Content-Type':'multipart/form-data'}})
        .then(res=>{
            console.log(res.data)
        })


        
        this.setState(this.initialState)
    };


    onFileChangeHandler = (e) => {
        e.preventDefault();
        this.setState({
            selectedFile: e.target.files[0]
        });
       
    };


    resetEvent = ()=>{
        this.setState(() => this.initialState)
    }
    eventChange = event =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
    
        const {date,location,nameEvent,description,organizer,type_event} = this.state;
        
        
      
        return(
        <div>
           <Card>
                <Card.Header>Add new event</Card.Header>
                <Form onReset={this.resetEvent} onSubmit={this.submitEvent} id="eventFormId">
                <Card.Body>
                    <Form.Row>
                        <Form.Group encType="multipart/form-data">
                            <Form.File onChange={this.onFileChangeHandler} multiple id="exampleFormControlFile1" label="Example file input" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridNameEvent">
                            
                            <Form.Label>Enter name event</Form.Label>
                            <Form.Control required  autoComplete="off"
                             type="text"
                             name="nameEvent"
                             value={nameEvent}
                             onChange={this.eventChange}
                             placeholder="Enter name event" />
                        </Form.Group>
                        </Form.Row>
                        <Form.Group  controlId="formGridDescription">
                            <Form.Label>Enter description</Form.Label>
                            <Form.Control required  autoComplete="off"
                             type="text"
                             name="description"
                             value={description}
                             onChange={this.eventChange}
                             placeholder="Enter description" />
                        </Form.Group>
                        
                        <Form.Group  controlId="formGridDate">
                            <Form.Label>Enter date</Form.Label>
                            <Form.Control required autoComplete="off"
                            type="date" 
                            name="date" 
                            value={date}
                             onChange={this.eventChange}
                            placeholder="Enter password again" />
                        </Form.Group>

                        <Form.Group  controlId="formGridTypeEvent">
                            <Form.Label>Enter type event</Form.Label>
                            <Form.Control required autoComplete="off"
                            type="text" 
                            name="type_event" 
                            value={type_event}
                             onChange={this.eventChange}
                            placeholder="Enter type event" />
                        </Form.Group>
                        <Form.Row>
                        <Form.Group  as={Col} controlId="formGridLocation">
                            <Form.Label>Enter location</Form.Label>
                            <Form.Control required  autoComplete="off"
                            type="text" 
                            name="location" 
                            value={location}
                             onChange={this.eventChange}
                            placeholder="Enter location" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridOrganizer">
                            <Form.Label>Enter organizer</Form.Label>
                            <Form.Control required  autoComplete="off"
                            type="text" 
                            name="organizer" 
                            value={organizer}
                             onChange={this.eventChange}
                            placeholder="Enter organizer" />
                        </Form.Group>
                        </Form.Row>
                  
                    </Card.Body>
                    <Card.Footer style={{"textAlign" : "right"}}>
                    <Button size="sm" variant="success" type="submit">
                        Submit
                    </Button>
                    <Button size="sm" variant="info" type="reset">
                        Reset
                    </Button>
                    </Card.Footer>
            console.log(this.state.event);
            </Form>
                    
            </Card>
            
        </div>
        
        )
        
    }
    
}
