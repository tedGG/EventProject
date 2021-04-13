import React,{Component} from 'react'
import {Card,Form,Button,Col} from 'react-bootstrap'
import axios from 'axios'
import {withRouter} from 'react-router-dom';
import "../App.css"
import { Icon } from 'semantic-ui-react'

 class Showcase extends Component{
   
    render(){
        return (
            <div className="showcase">
                   <h2>Lorem ipsum</h2>
                   <h1>Travel The world</h1>
                   <p>
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry.    
                    </p>
                    <div>
                        <Button size="lg" variant="outline-light">Get started   <Icon name='paper plane' size='large' /></Button>
                    </div> 
            </div>
        )
    }
}

export default Showcase
