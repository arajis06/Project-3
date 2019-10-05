
import React, { Component } from 'react';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import 'chat.css'
 
class App extends Component {
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    // Now send the message throught the backend API
  }

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}

        />
      </div>
    );
  }
}
 
export default App;