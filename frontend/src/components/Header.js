import React,{Component} from 'react'
import { Container, Navbar,Col } from 'react-bootstrap'
import EventList from './LikedEvents'

export default class Footer extends Component{

    render(){
        
        return(
            <div>
                <NavigationBar/>
                
                <EventList/>
            </div>
        )
    }
}

