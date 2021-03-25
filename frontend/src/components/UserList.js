import axios from 'axios';
import React,{Component} from 'react'
import {Card,Table,Image,ButtonGroup,Button} from 'react-bootstrap'


export default class UserList extends Component{


    constructor(props){
        super(props);
        this.state = {
            users : []
        };
    }

    componentDidMount(){        
        this.findAllUsers();
    }

    findAllUsers(){
        axios.get("http://localhost:8080/admin/users")
        .then(response => response.data)
        .then((data)=>{
            this.setState({users: data})
        })
    }
    deleteUser = (userId) =>{
        axios.delete("http://localhost:8080/registration/deleteUser"+userId)
        .then(response=>{
            if(response.data != null){
                this.setState({
                    users: this.state.users.filter(user => user.id!==userId)
                })
            }
        })    
    }

    render(){
        return(
            <Card className="border border-primary bg-light text-dark">
            <Card.Header>User List</Card.Header>
            <Card.Body>
                    <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                <th>id</th>
                                <th>Username</th>
                                <th>Password</th>
                                <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                this.state.users.length === 0 ?
                                <tr>
                                    <td colSpan="6"></td>
                                </tr> :

                                this.state.users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>
                                        <Image src="" height="25" width="25"/>
                                            {user.username}
                                        </td>
                                        <td>{user.password}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" variant="outline-primary">Edit</Button>
                                                <Button size="sm" variant="outline-danger" onClick={this.deleteUser.bind(this,user.id)}>Delete</Button>
                                            </ButtonGroup>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                            </Table>
            </Card.Body>
        </Card> 
        );
    }
}
