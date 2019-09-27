import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import './TopicBar.css'

class TopicBar extends React.Component {
  render(){
      return(
        <Navbar className="TopicNav">
       
        <Nav className="mr-auto">
          <Nav.Link href="#">Software Engineering |</Nav.Link>
          <Nav.Link href="#">Programming |</Nav.Link>
          <Nav.Link href="#">Artificial Intelligent |</Nav.Link>
          <Nav.Link href="#">Cybersecurity |</Nav.Link>
          <Nav.Link href="#">IoT |</Nav.Link>
          <Nav.Link href="#">Interview |</Nav.Link>
          <Nav.Link href="#">Coding Challenge |</Nav.Link>
        </Nav>
      </Navbar>
        
      )
  }  
}
export default TopicBar;