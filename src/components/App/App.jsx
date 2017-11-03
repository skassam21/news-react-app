import React, { Component } from 'react';
import LandingPage from './../LandingPage/LandingPage';
import FirstQuestion from './../Questions/FirstQuestion';
import SecondQuestion from './../Questions/SecondQuestion';
import ThirdQuestion from './../Questions/ThirdQuestion';
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

    this.addSources = (newSources) => this._addSources(newSources);
    this.changePage = (newPage) => this._changePage(newPage);
  }

  _changePage(newPage) {
    this.setState({
      page: newPage
    });
  }

  _addSources(newSources) {
    this.setState({
      sources: this.state.sources.concat(newSources)
    });
  }

  _addSources(newSources) {
	//console.log(newSources);
	for (var i = 0; i < newSources.length; i++) {
		this.state.sources.push(newSources[i]);
	}
	console.log(this.state.sources);
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
    }

    return (
      <div className="intro-page container">
        {pageView}
      </div>
    )
  }
}

export default App;
