import React,{Component} from 'react'
import {Card,Form,Button,Col} from 'react-bootstrap'
import axios from 'axios'
import { Redirect } from 'react-router';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from 'react-router-dom';
import {browserHistory} from 'react-router'
import {withRouter} from 'react-router-dom';
import { Icon } from 'semantic-ui-react'


 class Signin extends Component{

    constructor(props){
        super(props);
        this.state = this.initialState;
        this.userChange = this.userChange.bind(this);
        this.submitUser = this.submitUser.bind(this);
    }

    initialState = {
        username:'',password:'',passwordConfirm:'',email:''
    }
     submitUser = event =>{
        
        event.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }

        axios.post("http://localhost:8080/api/auth/signin",user)
        .then(response=>{
            if(response.data !=null){
                alert("success!")
                return this.props.history.push('/');

               
          }else {
              alert("Warn!") 
            }
        })

        this.setState(this.initialState)

    }
    resetUser=()=>{
        this.setState(() => this.initialState)
    }
    userChange= event =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    
    render(){
        
        const {username,password} = this.state;

        return (

                <Card>
                <Card.Header>Login</Card.Header>
                <Form onReset={this.resetUser} onSubmit={this.submitUser} id="userFormId">
                <Card.Body>
                    <Form>
                        <Form.Group as={Col} controlId="formGridUsername">
                        
                            <Form.Label>Enter username</Form.Label>
                            <Form.Control  required autoComplete="off"
                             type="text"
                             name="username" 
                             value={username}
                             onChange={this.userChange}
                             placeholder="Enter username" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <i class="fas fa-sign-in-alt"></i>      
                            <Form.Label>Enter password</Form.Label>
                            <Form.Control required required autoComplete="off"
                             type="password"
                             name="password"
                             value={password}
                             onChange={this.userChange}
                             placeholder="Enter password" />
                        </Form.Group>
                    </Form>
                    </Card.Body>
                    <Card.Footer style={{"textAlign" : "right"}}>
                    
                    <Button size="sm" variant="success" type="submit">
                        Submit
                    </Button>
                    
                
                    </Card.Footer>
            
                    </Form>
             
            </Card>
            
        )
    }
}
export default withRouter(Signin);

