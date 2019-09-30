import React from 'react';
import Toolbar from "../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from '../Components/Navigation/SideDrawer/SideDrawer';
import Backdrop from '../Components/Navigation/Backdrop/Backdrop';
import TopicBar from "../Components/TopicBar/TopicBar";
import CreatePost from "../Components/CreatePost/CreatePost";
import BlogList from "../Components/BlogList/BlogList";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Col from "../Components/Col/Col";

class Blog extends React.Component{
      // set initial state
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };
render(){
         // let sideDrawer; //null
         let backdrop;

         if (this.state.sideDrawerOpen) {
           // sideDrawer = <SideDrawer />;
           backdrop = <Backdrop click={this.backdropClickHandler} />;
         }
    return(
        <Container style={{marginTop: 30}}>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.sideDrawerOpen} />
        {backdrop}
            <Row>
                <Col size="md-12" style={{marginTop:'5em'}}>
                    <TopicBar/>
                </Col>
                <Col size="md-12" style={{marginTop:'1em'}}>
                    <CreatePost/>
                </Col> 
                <Col size="md-12" style={{marginTop:'1em'}}>
                    <BlogList/>
                </Col>
               
            </Row>
        </Container>
    )
}
}
export default Blog;