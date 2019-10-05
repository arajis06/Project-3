import React, { Component } from "react";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Col from "../Components/Col/Col";
import API from "../utils/API";
import Toolbar from "../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from '../Components/Navigation/SideDrawer/SideDrawer';
import Backdrop from '../Components/Navigation/Backdrop/Backdrop';
import { Link } from "react-router-dom";
import {List, ListItem} from "../Components/BlogList/BlogList";
import CreatePost from "../Components/CreatePost/CreatePost";

class Blogs extends Component {

 // Methods for components in the Navigation Directory=========================
 // set initial state
  state = {
    sideDrawerOpen: false
  };
  //Previous state of the sidedrawer to control when to open
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  //Controls when the backdrop displays
  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  };

  state = {
    blogs: [],
    title: "",
    category: "",
    author: "",
    article: "",
  };

  componentDidMount() {
    this.loadBlogs();
  }

  loadBlogs = () => {
    API.getBlogs()
      .then(res =>
        this.setState({ blogs: res.data, title: "", category: "", author: "", article: "" })
      )
      .catch(err => console.log(err));
  };

  // deleteBlog = id => {
  //   API.deleteBlog(id)
  //     .then(res => this.loadBlogs())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBlog({
  //       title: this.state.title,
  //       category: this.state.category,
  //       author: this.state.author,
  //       article: this.state.article
  //     })
  //       .then(res => this.loadBlogs())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
     // let sideDrawer; //null
    let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <Container>
        <Row>
        <Col size="md-12" style={{ marginTop: '3em' }}>
                        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                        <SideDrawer show={this.state.sideDrawerOpen} />                         
                        {backdrop}
                   </Col>
                   
                   <Col size="md-12" style={{marginTop:'1em'}}>
                     <CreatePost/>
                 </Col> 
          <Col size="md-12" style={{marginTop:'1em'}}>
                
                {this.state.blogs.length ? (
                  <List>
                    {this.state.blogs.map(blog => (
                      <ListItem key={blog._id}>
                        <Link to={"/blog/" + blog._id}>
                          <strong>
                            {blog.title}
                          </strong>
                          <span style={{float: 'right'}}>{blog.category}</span>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
                    </Col>
        </Row>
      </Container>
    );
  }
}

export default Blogs;





// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Toolbar from "../Components/Navigation/Toolbar/Toolbar";
// import SideDrawer from '../Components/Navigation/SideDrawer/SideDrawer';
// import Backdrop from '../Components/Navigation/Backdrop/Backdrop';
// import {PostArticle} from "../Components/PostArticle/PostArticle";
// import Container from "../Components/Container/Container";
// import Row from "../Components/Row/Row";
// import Col from "../Components/Col/Col";

// class Post extends React.Component {
//       // Methods for components in the Navigation Directory=========================
//   // set initial state
//   state = {
//     sideDrawerOpen: false
//   };
//   //Previous state of the sidedrawer to control when to open
//   drawerToggleClickHandler = () => {
//     this.setState((prevState) => {
//       return { sideDrawerOpen: !prevState.sideDrawerOpen };
//     });
//   };
//   //Controls when the backdrop displays
//   backdropClickHandler = () => {
//     this.setState({ sideDrawerOpen: false })
//   };
//     render() {
//         // let sideDrawer; //null
//     let backdrop;

//     if (this.state.sideDrawerOpen) {
//       // sideDrawer = <SideDrawer />;
//       backdrop = <Backdrop click={this.backdropClickHandler} />;
//     }
//         return (
//             <Container>
//                 <Row>
//                     <Col size="md-12" style={{ marginTop: '3em' }}>
//                         <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
//                         <SideDrawer show={this.state.sideDrawerOpen} />
//                         {backdrop}
//                     </Col>
//                     <Col size="md-12" style={{ marginTop: '5em' }}>
//                         <h2 className="text-center" style={{fontFamily: "dosis, sans serif", fontSize: '40px', fontWeight: '600'}}>Create Article</h2>
//                         <PostArticle />
//                     </Col>
//                 </Row>
//             </Container>
//         )
//     }
// }
// export default Post;



// import React from 'react';
// import Toolbar from "../Components/Navigation/Toolbar/Toolbar";
// import SideDrawer from '../Components/Navigation/SideDrawer/SideDrawer';
// import Backdrop from '../Components/Navigation/Backdrop/Backdrop';
// import TopicBar from "../Components/TopicBar/TopicBar";
// import CreatePost from "../Components/CreatePost/CreatePost";
// import BlogList from "../Components/BlogList/BlogList";
// import Container from "../Components/Container/Container";
// import Row from "../Components/Row/Row";
// import Col from "../Components/Col/Col";

// class Blog extends React.Component{
//       // set initial state
//   state = {
//     sideDrawerOpen: false
//   };

//   drawerToggleClickHandler = () => {
//     this.setState((prevState) => {
//       return {sideDrawerOpen: !prevState.sideDrawerOpen};
//     });
//   };

//   backdropClickHandler = () => {
//     this.setState({sideDrawerOpen: false})
//   };
// render(){
//          // let sideDrawer; //null
//          let backdrop;

//          if (this.state.sideDrawerOpen) {
//            // sideDrawer = <SideDrawer />;
//            backdrop = <Backdrop click={this.backdropClickHandler} />;
//          }
//     return(
//         <Container style={{marginTop: 30}}>
//             <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
//             <SideDrawer show={this.state.sideDrawerOpen} />
//         {backdrop}
//             <Row>
//                 <Col size="md-12" style={{marginTop:'5em'}}>
//                     <TopicBar/>
//                 </Col>
//                 <Col size="md-12" style={{marginTop:'1em'}}>
//                     <CreatePost/>
//                 </Col> 
//                 <Col size="md-12" style={{marginTop:'1em'}}>
//                     <BlogList/>
//                 </Col>
               
//             </Row>
//         </Container>
//     )
// }
// }
// export default Blog;