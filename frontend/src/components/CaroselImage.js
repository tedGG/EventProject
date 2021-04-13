import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'

export default class CaroselImage extends Component{
    render(){
        return (
            <div>
             <Carousel>
                 
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src="https://34mag.net/piarshak/content/editor_images/2018content/september/15sovetov_koncert/125.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src="https://www.soyuz.ru/public/uploads/files/5/7400118/1005x558_20200117181124c1cf431faf.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://i.ytimg.com/vi/SU1rTUpaoGU/maxresdefault.jpg"
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
    
