import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './TopicBar.css'

class TopicBar extends React.Component {
  render() {
    return (
      <Navbar className="TopicNav">

        <Nav className="mr-auto">
          <div id="item"><Nav.Link href="#">Software Engineering</Nav.Link></div>
          <div id="item"><Nav.Link href="#">Programming</Nav.Link></div>
          <div id="item"><Nav.Link href="#">Artificial Intelligent</Nav.Link></div>
          <div id="item"><Nav.Link href="#">Cybersecurity</Nav.Link></div>
          <div id="item"><Nav.Link href="#">IoT</Nav.Link></div>
          <div id="item"><Nav.Link href="#">Interview</Nav.Link></div>
          <div id="item"><Nav.Link href="#">Coding Challenge</Nav.Link></div>
        </Nav>
      </Navbar>

    )
  }
}
export default TopicBar;