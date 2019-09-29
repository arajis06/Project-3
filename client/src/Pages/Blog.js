import React from 'react';
import Toolbar from "../Components/Navigation/Toolbar/Toolbar";
import TopicBar from "../Components/TopicBar/TopicBar";
import CreatePost from "../Components/CreatePost/CreatePost";
import BlogList from "../Components/BlogList/BlogList";
import Container from "../Components/Container/Container";
import Row from "../Components/Row/Row";
import Col from "../Components/Col/Col";

class Blog extends React.Component{
render(){
    return(
        <Container style={{marginTop: 30}}>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
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