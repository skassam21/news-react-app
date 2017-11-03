import React, { Component } from 'react';
import LandingPage from './../LandingPage/LandingPage';
import FirstQuestion from './../Questions/Questions';
import FeedPage from './../Feed/FeedPage';
import Api, { ALL_ARTICLES } from './../../api';
import s from './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'feed',
      articles: ALL_ARTICLES,
      sources: []
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

    if (this.state.page === 'landingPage') {
      pageView = <LandingPage changePage={this.changePage} />;
    } else if (this.state.page === 'firstQuestion') {
      pageView = <FirstQuestion />;
    } else if (this.state.page === 'feed') {
      pageView = <FeedPage articles={this.state.articles}
        changePage={this.changePage}/>;
    }

    return (
      <div className="app container">
        {pageView}
      </div>
    )
  }
}

export default App;
