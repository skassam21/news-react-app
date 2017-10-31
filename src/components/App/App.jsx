import React, { Component } from 'react';
import LandingPage from './../LandingPage/LandingPage';
import FirstQuestion from './../Questions/Questions';
import s from './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0
    }

    this.changePage = (newPage) => this._changePage(newPage);

  }

  _changePage(newPage) {
    this.setState({
      page: newPage
    })
  }

  render() {
    let pageView = null;
    if (this.state.page === 0) {
      pageView = <LandingPage changePage={this.changePage} />;
    } else if (this.state.page === 1) {
      pageView = <FirstQuestion />;
    }

    let styles = {
      textAlign: 'center',
      paddingTop: '200px'
    }

    return (
      <div className="intro-page container" style={styles}>
        {pageView}
      </div>
    )
  }
}

export default App;
