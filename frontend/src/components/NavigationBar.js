import React,{Component} from 'react'
import {Navbar,Nav,Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default class NavigationBar extends Component {
    render(){
        return (
            <div>
                 <Navbar bg="primary" variant="dark">
                  <Link to={""} className="navbar-brand">
                      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpfOrY0TH6k5ZO0682OtFh1qklQuA2-tH7tQ&usqp=CAU" height='50px' width='50px'/>
                  </Link>
                 <Navbar.Brand href="/">EventEveryday</Navbar.Brand>
                 <Nav className="mr-auto">
                    <Link to={"users"} className="nav-link">User List</Link>
                    <Link to={"createEvent"} className="nav-link">Create event</Link>
                 </Nav>  
                 <Nav className="navbar-right">
                    <Link to={"registration"} className="nav-link">Registration</Link>
                    <Link to={"login"} className="nav-link">Login</Link>
                 </Nav>
               
            </Navbar>
            </div>
        )
    }
}

 