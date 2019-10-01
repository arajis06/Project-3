import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Toolbar from "../Components/Navigation/Toolbar/Toolbar";
import SideDrawer from '../Components/Navigation/SideDrawer/SideDrawer';
import Backdrop from '../Components/Navigation/Backdrop/Backdrop';
import PostArticle from "../Components/PostArticle/PostArticle";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Col from "../Components/Col/Col";

class Post extends React.Component {
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
    //========================================================================
    render() {
    // let sideDrawer; //null
    let backdrop;
    //backdrop will display when hamgurger is clicked to open sidedrawer
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
                    <Col size="md-12" style={{ marginTop: '5em' }}>
                        <h2 className="text-center" style={{fontFamily: "dosis, sans serif", fontSize: '40px', fontWeight: '600'}}>Create Article</h2>
                        <PostArticle />
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default Post;