import React,{Component} from 'react'
import {Navbar,Nav,Image, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import "../App.css"

import { Icon } from 'semantic-ui-react'

export default class NavigationBar extends Component {
    
    render(){
        const stylenavbar = {
            display : "flex",
            position: "absolute",
            width: "100%",
            
        }

        return (
            <div>
                 <Navbar variant="dark" style={stylenavbar}>
                  <Link to={""} className="navbar-brand">
                      <Image src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGc+PGNpcmNsZSBjeD0iMjU2IiBjeT0iMjU2IiBmaWxsPSIjMmM2MTgwIiByPSIyNTYiIGRhdGEtb3JpZ2luYWw9IiM0MjQyNDIiIHN0eWxlPSIiIGNsYXNzPSIiPjwvY2lyY2xlPjwvZz48cGF0aCBkPSJtNTExLjkxMyAyNjIuNzA2LTE0Mi44OTEtMTQyLjg5MS0yMDEuMjk3IDIxLjc0Ni0yMS43NDYgMjUwLjYyNCAxMTkuNjE4IDExOS42MThjMTM0LjcxMy00Ljk2OCAyNDIuODQyLTExNC4wMDcgMjQ2LjMxNi0yNDkuMDk3eiIgZmlsbD0iIzIzMjMyMyIgZGF0YS1vcmlnaW5hbD0iIzIzMjMyMyIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIGQ9Im0zNjkuMDIyIDE3Ny44MTV2LTU4aC0yMjMuMDQzdjI3Mi4zN2gyMjMuMDQzdi01OGgtMTY1LjA0M3YtNDkuMTg1aDE2NS4wNDN2LTU4aC0xNjUuMDQzdi00OS4xODV6IiBmaWxsPSIjZjhmZmZiIiBkYXRhLW9yaWdpbmFsPSIjZjhmZmZiIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PGcgZmlsbD0iI2Q4ZDhkOCI+PHBhdGggZD0ibTI1NiAxMTkuODJoMTEzLjAydjU4aC0xMTMuMDJ6IiBmaWxsPSIjZDhkOGQ4IiBkYXRhLW9yaWdpbmFsPSIjZDhkOGQ4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI1NiAyMjdoMTEzLjAydjU4aC0xMTMuMDJ6IiBmaWxsPSIjZDhkOGQ4IiBkYXRhLW9yaWdpbmFsPSIjZDhkOGQ4IiBzdHlsZT0iIj48L3BhdGg+PHBhdGggZD0ibTI1NiAzMzQuMThoMTEzLjAydjU4aC0xMTMuMDJ6IiBmaWxsPSIjZDhkOGQ4IiBkYXRhLW9yaWdpbmFsPSIjZDhkOGQ4IiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvZz48L2c+PC9zdmc+" width="50px"/>
                  </Link>
                 <Navbar.Brand href="/">EventEveryday</Navbar.Brand>
                 <Nav className="mr-auto">
                 <Link to={"events"} className="nav-link"><h4>Events</h4></Link>
                    <Link to={"users"} className="nav-link"><h4>User List</h4></Link>
                    <Link to={"createEvent"} className="nav-link"><h4>Create event</h4></Link>
                    <Link to={"likedevents"} className="nav-link"><h4>Liked events</h4></Link>
                 </Nav>  
                 <Nav className="navbar-right">
                    <Link to={"registration"} className="nav-link"><Button variant="outline-light"><Icon name='add user' size='small' />Registration</Button></Link>
                    <Link to={"login"} className="nav-link"><Button variant="outline-light"><Icon name='arrow circle right' size='small' />Login</Button></Link>
                 </Nav>
               
            </Navbar>
            </div>
        )
    }
}

 