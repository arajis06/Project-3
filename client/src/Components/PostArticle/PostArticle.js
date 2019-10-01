import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './PostArticle.css'

class PostArticle extends React.Component {

  constructor() {
    super();
    this.state = {
      formFields: { name: '' }
    }
  };

  formHandler = () => {

    // For after the submit
    // this.setState = {
    //   formFields: { topic: '', title: '', article: '', name: '' }
    // }
    axios.post('/api/post/', this.state.formFields)
      .then(function (response) {
        console.log(response);
        //Perform action based on response
      })
      .catch(function (error) {
        console.log(error);
        //Perform action based on error
      });
  };

  render() {
    return (
      <Form onSubmit={this.formHandler}>

        <Form.Group controlId="exampleForm.ControlInput1" name="topic">
          <Form.Label>Topic</Form.Label>
          <Form.Control type="text" placeholder="Programming" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput2" name="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Programming 101" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput3" name="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="John Smith" />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1" name="article">
          <Form.Control as="textarea" rows="20" />
        </Form.Group>
        <Button variant="outline-warning" type="submit">Submit</Button>
      </Form>
    )
  };

}


export default PostArticle;

