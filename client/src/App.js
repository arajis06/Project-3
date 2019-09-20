import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import Resource from "./Pages/Resource";
// import Search from "./pages/Search";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
       
          <Route exact path="/" component={SignIn} />
          <Route exact path="/resource" component={Resource} />
          {/* <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} /> */}
        
      </div>
    </Router>
  );
}

export default App;











// import React, { Component } from 'react';
// // import './App.css';
// import Toolbar from "./Components/Toolbar/Toolbar";
// import SideDrawer from './Components/SideDrawer/SideDrawer';
// import Backdrop from './Components/Backdrop/Backdrop';
// import Login from './Components/Login/Login';

// class App extends Component {
//   // set initial state
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
//    render() {
//     // let sideDrawer; //null
//     let backdrop;

//     if (this.state.sideDrawerOpen) {
//       // sideDrawer = <SideDrawer />;
//       backdrop = <Backdrop click={this.backdropClickHandler} />;
//     }

//     return (
//       <div style={{height: '100%'}}>
//         <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
//         <SideDrawer show={this.state.sideDrawerOpen} />
//         {backdrop}
//         <main style={{marginTop: '64px'}}>
//           <p>Page Content</p>
//           <Login />
//         </main>

//       </div>
//     ); 
//   }
// }
// export default App;
