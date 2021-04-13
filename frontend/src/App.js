import './App.css';
import NavigationBar from './components/NavigationBar';
import {Image, Container, Row, Col, Navbar } from 'react-bootstrap';
import Footer from './components/Footer';
import LikedEvents from './components/LikedEvents'
import UserList from './components/UserList';
import Login from './components/Login';
import Registration from './components/Registration';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import EventList from './components/EventList';
import Event from './components/Event'
import CaroselImage from './components/CaroselImage';
import Signin from './components/Signin';
import "./App.css"
import Showcase from './components/Showcase';
import {Link} from 'react-scroll'
import { Header } from 'semantic-ui-react';

function App() {
  

const marginTop = {
  marginTop:"20px"
};

  return (

    <Router>
        <NavigationBar />
        <div className="main"><Showcase/></div>
        <Container>
        <Row>   
          <Col lg={12} style={marginTop}>
            <Switch>
              <Route path="/" exact component={EventList}/>
              {/* <Route path="/events" exact component={EventList}/> */}
              <Route path="/likedevents" exact component={LikedEvents}/>
              <Route path="/users" exact component={UserList}/>
              <Route path="/createEvent" exact component={Event}/>
              <Route path="/registration" exact component={Registration}/>
              <Route path="/login" exact component={Signin}/>
            </Switch>
          </Col>
        </Row>
      </Container>
      {/* <Footer/> */}
    </Router>
  );
}

export default App;
