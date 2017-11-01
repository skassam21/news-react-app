import React, { Component } from 'react';
import LandingPage from './../LandingPage/LandingPage';
import FirstQuestion from './../Questions/Questions';
import Api from './../../api';
import s from './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'landingPage',
      articles: [],
      sources: []
    }

    Api.getArticlesFromSources(['the-next-web', 'techcrunch']).then(articles => {
      console.log(articles);
    });

    this.addSources = (newSources) => this._addSources(newSources);
    this.changePage = (newPage) => this._changePage(newPage);
  }

  _changePage(newPage) {
    this.setState({
      page: newPage
    })
  }

  _addSources(newSources) {
    this.setState({
      sources: this.state.sources.concat(newSources)
    });
  }

  render() {
    let pageView = null;

    if (this.state.page === 'landingPage') {
      pageView = <LandingPage changePage={this.changePage} />;
    } else if (this.state.page === 'firstQuestion') {
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
