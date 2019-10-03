import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import './Blog.css'

class BlogList extends React.Component {
  render(){
      return(
        <Card >
        <ListGroup variant="flush">
          <ListGroup.Item><a href='/'>AI for Beginners</a> <span style={{float: 'right'}}>Artificial Intelligence</span></ListGroup.Item>
          <ListGroup.Item><a href='/'>The Art of Computer Programming</a> <span style={{float: 'right'}}>Programming</span></ListGroup.Item>
          <ListGroup.Item><a href='/'>The New Politics of Cybersecurity</a> <span style={{float: 'right'}}>Cybersecurity</span></ListGroup.Item>
          <ListGroup.Item><a href='/'>Master the JavaScript Interview</a> <span style={{float: 'right'}}>Interview</span></ListGroup.Item>
         
        </ListGroup>
      </Card>        
      )
  }  
}
export default BlogList;