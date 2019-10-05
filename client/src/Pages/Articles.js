import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Col from "../Components/Col/Col";
import Toolbar from "../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from '../Components/Navigation/SideDrawer/SideDrawer';
import Backdrop from '../Components/Navigation/Backdrop/Backdrop';
import API from "../utils/API";

class Article extends Component {
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
    blog: {}
  };
  // When this component mounts, grab the blog with the _id of this.props.match.params.id
  // e.g. localhost:3000/blogs/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBlog(this.props.match.params.id)
      .then(res => this.setState({ blog: res.data }))
      .catch(err => console.log(err));
  }

  render() {
       // let sideDrawer; //null
    let backdrop;

    if (this.state.sideDrawerOpen) {
      // sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <Container fluid style={{fontFamily: "Dosis, sans-serif"}}>
        <Row>
        <Col size="md-12" style={{ marginTop: '3em' }}>
                        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                        <SideDrawer show={this.state.sideDrawerOpen} />                         
                        {backdrop}
                   </Col>
          <Col size="md-12" style={{backgroundColor: '#a543a31a', height: "15rem", padding:"3rem",}}>
            
              <h1 style={{textAlign: "center", color:"#521751"}}>
                {this.state.blog.title}
              </h1>
              <h2  style={{textAlign: "center", color:"#521751"}}>by <br></br>{this.state.blog.author}</h2>
            
          </Col>
        </Row>
        <Row>
          <Col size="md-10" style={{margin: "8rem", padding: '1rem',}}>
            <article style={{textAlign:"justify",}}>
              
              <p>
                {this.state.blog.article}
              </p>
            </article>
          </Col>
        </Row>
        
          <Col size="md-2" style={{float: "right", fontSize:"20px",fontWeight: "bold"}}>
            <Link to="/blog">← Back to Blogs</Link>
          </Col>
        
      </Container>
    );
  }
}

export default Article;
