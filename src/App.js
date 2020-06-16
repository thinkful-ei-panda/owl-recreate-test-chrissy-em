import React, { Component } from 'react';
// import STORE from './store';
import Stage from './Stage';
import Chatlog from './Chatlog';


class App extends Component {

  static defaultProps = {
    store: {
      participants: [],
      chatEvents: [],
    }
  };

  render() {
    // const { store } = this.props
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Owl Sessions</h1>
        </header>
        <div className='App-list'>
            <Stage />
          ),
        </div>
        <div className='App-chat'>
            <Chatlog 
            
            
            />
          ),
        </div>
      </main>
    )
  }
}

export default App;