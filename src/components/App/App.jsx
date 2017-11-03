import React, { Component } from 'react';
import LandingPage from './../LandingPage/LandingPage';
import FeedPage from './../Feed/FeedPage';
import FirstQuestion from './../Questions/FirstQuestion';
import SecondQuestion from './../Questions/SecondQuestion';
import ThirdQuestion from './../Questions/ThirdQuestion';
import s from './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'landingPage',
      sources: []
    }

    this.addSources = (newSources) => this._addSources(newSources);
    this.changePage = (newPage) => this._changePage(newPage);
  }

  _changePage(newPage) {
    this.setState({
      page: newPage
    });
  }

  _addSources(newSources, callback) {
    this.setState({
      sources: this.state.sources.concat(newSources)
    }, callback);
  }

  render() {
    let pageView = null;

    if (this.state.page === 'landingPage') {
      pageView = <LandingPage changePage={this.changePage} />;
    } else if (this.state.page === 'firstQuestion') {
      pageView = <FirstQuestion changePage={this.changePage} addSources={this.addSources}/>;
    } else if (this.state.page === 'secondQuestion') {
      pageView = <SecondQuestion changePage={this.changePage} addSources={this.addSources}/>;
    } else if (this.state.page === 'thirdQuestion') {
      pageView = <ThirdQuestion changePage={this.changePage} addSources={this.addSources}/>;
    } else if (this.state.page === 'feed') {
      pageView = <FeedPage sources={this.state.sources} />
    }

    return (
      <div className="intro-page">
        {pageView}
      </div>
    )
  }
}

export default App;
