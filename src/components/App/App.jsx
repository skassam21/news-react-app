import React, { Component } from 'react';
import s from './App.scss';

function IntroMessage(props) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <h1>Welcome to Newsboard!</h1>
        <button className="btn btn-primary"
          style={{marginTop: '20px'}}>Get Started</button>
      </div>
    </div>
  )
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: 1
    }
  }

  render() {
    let question = null;
    if (this.state.question === 1) {
      question = <IntroMessage />;
    }

    let styles = {
      textAlign: 'center',
      paddingTop: '200px'
    }

    return (
      <div className="intro-page container" style={styles}>
        {question}
      </div>
    )
  }
}

export default App;
