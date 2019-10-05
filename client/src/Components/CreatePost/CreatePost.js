import React from 'react';
import {Button} from 'react-bootstrap';
import './CreatePost.css'

class CreatePost extends React.Component {

  
  render(){
      return(
        <Button href="/post" className="btn btn-outline-success" size='lg' block >Create Blog</Button>   
      )
  }  
}
export default CreatePost;