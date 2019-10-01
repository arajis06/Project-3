import React from 'react';
import {Button} from 'react-bootstrap';
import './CreatePost.css'

class CreatePost extends React.Component {

  
  render(){
      return(
        <Button href="/post" variant="outline-warning" size='lg' block >Create Blog</Button>   
      )
  }  
}
export default CreatePost;