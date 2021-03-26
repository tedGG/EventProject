import React,{Component} from 'react'
import { Container, Navbar,Col } from 'react-bootstrap'

export default class Footer extends Component{

    render(){
        let fullyYear = new Date().getFullYear();
        return(
            <Navbar fixed="bottom" bg="primary" variant="light"> 
                <Container>
                    <Col lg={12} className="text-center text-muted">
                        <div> {fullyYear} all right!</div>
                    </Col>
                </Container>
            </Navbar>
        )
    }
}

