import React,{Component} from 'react'
import {Card,Form,Button,Col} from 'react-bootstrap'
import axios from 'axios'
import MyToast from './MyToast'


export default class User extends Component{
    constructor(props){
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.userChange = this.userChange.bind(this);
        this.submitUser = this.submitUser.bind(this);
    }

    initialState = {
        id:0,username:'',password:'',email:''
    }
    submitUser = event =>{
        event.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm,
            email: this.state.email
        }

        axios.post("http://localhost:8080/registration/addUser",user)
        .then(response=>{
            if(response.data !=null){
                this.setState({"show":true});  
                setTimeout(() => this.setState({"show" : false}),3000); 
            }else {
                this.setState({"show":false});   
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
        const {username,password,passwordConfirm,email} = this.state;

        return (

            <div>
                {/* <div style={{"display" : this.state.show ? "block" : "none"}}>
                    <MyToast children={{show:this.state.show, message:"User saved successfully!"}} />
                </div> */}
                <Card>
                <Card.Header>Add new user</Card.Header>
                <Form onReset={this.resetUser} onSubmit={this.submitUser} id="userFormId">
                <Card.Body>
                    <Form.Row>
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
                            <Form.Label>Enter password</Form.Label>
                            <Form.Control required required autoComplete="off"
                             type="password"
                             name="password"
                             value={password}
                             onChange={this.userChange}
                             placeholder="Enter password" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPasswordConfirm">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control required required autoComplete="off"
                            type="password" 
                            name="passwordConfirm" 
                            value={passwordConfirm}
                             onChange={this.userChange}
                            placeholder="Enter password again" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Enter Email</Form.Label>
                            <Form.Control required required autoComplete="off"
                            type="email" 
                            name="email" 
                            value={email}
                             onChange={this.userChange}
                            placeholder="Enter email" />
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
            
                    </Form>
             
            </Card>
            </div>
        )
    }
}

