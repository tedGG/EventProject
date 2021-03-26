import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import NavigationBar from './components/NavigationBar';
import { Container, Row, Col } from 'react-bootstrap';
import Welcome from './components/Welcome';
import Footer from './components/Footer';
import UserList from './components/UserList';
import User from './components/Registration';
import Login from './components/Login';
import Registration from './components/Registration';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import EventList from './components/EventList';
import Event from './components/Event'



function App() {
  
 

const marginTop = {
  marginTop:"20px"
};

  return (
    <Router>
      <NavigationBar/>
      <Container>
        <Row>
          <Col lg={12} style={marginTop}>
            {/* //()=><Provider store={store}><UserList/></Provider> */}
            <Switch>
              <Route path="/" exact component={EventList}/>
              <Route path="/users" exact component={UserList}/>
              <Route path="/createEvent" exact component={Event}/>
              <Route path="/registration" exact component={Registration}/>
              <Route path="/login" exact component={Login}/>
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
