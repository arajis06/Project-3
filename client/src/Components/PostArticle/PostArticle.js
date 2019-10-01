import React from 'react';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';
import './PostArticle.css'

class PostArticle extends React.Component {

  constructor() {
    super();
     this.state = {
       formFields: {name: ''}
     }
   };
  

    render() {
        return(
<Form  onSubmit={this.formHandler(this.state.formFields)}>

  <Form.Group controlId="exampleForm.ControlInput1" name="topic">
    <Form.Label>Topic</Form.Label>
    <Form.Control type="text" placeholder="Programming" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput2" name="title">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Programming 101" />
  </Form.Group>

  
  <Form.Group controlId="exampleForm.ControlTextarea1" name="article">
    <Form.Control as="textarea" rows="20" />
  </Form.Group>
  <Button variant="outline-warning" type="submit">Submit</Button>
</Form>
        )
    };
    formHandler(formFields) {

      this.setState = {
        formFields: {name: '', topic:'', title:'', article:''}
      }
      axios.post('/post', formFields)
        .then(function(response){
          console.log(response);
          //Perform action based on response
      })
        .catch(function(error){
          console.log(error);
          //Perform action based on error
        });
      };
  }


export default PostArticle;

