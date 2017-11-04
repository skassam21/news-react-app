import React, { Component } from 'react';
import LandingPage from './../LandingPage/LandingPage';
import FeedPage from './../Feed/FeedPage';
import Question from './../Questions/Question';
import QUESTIONS from './../Questions/Questions';
import s from './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'landingPage',
      sources: [],
      questionOptions: QUESTIONS
    }

    this.editSources = (selectedOption) => this._editSources(selectedOption);
    this.changePage = (newPage) => this._changePage(newPage);
  }

  _changePage(newPage) {
    this.setState({
      page: newPage
    });
  }

  _editSources(selectedOption) {
    let newSources = [];
    this.state.questionOptions.map(question => {
      question.options.map(option => {
        if (option.id === selectedOption.id) {
          option.isActive = !option.isActive;
          if (option.isActive) {
            newSources.push(option.source);
          }
        } else if (option.isActive) {
          newSources.push(option.source);
        }
      });
    });
    this.setState({
      sources: newSources,
      questionOptions: this.state.questionOptions
    });
  }

  render() {
    let pageView = null;

    if (this.state.page === 'landingPage') {
      pageView = <LandingPage changePage={this.changePage} />;
    } else if (this.state.page === 'firstQuestion') {
      pageView = <Question changePage={this.changePage} nextPage={'secondQuestion'}
        editSources={this.editSources}
        question={this.state.questionOptions[0].question}
        titleQuestion={this.state.questionOptions[0].titleQuestion}
        options={this.state.questionOptions[0].options}/>;
    } else if (this.state.page === 'secondQuestion') {
      pageView = <Question changePage={this.changePage} nextPage={'thirdQuestion'}
        editSources={this.editSources}
        question={this.state.questionOptions[1].question}
        titleQuestion={this.state.questionOptions[1].titleQuestion}
        options={this.state.questionOptions[1].options}/>;
    } else if (this.state.page === 'thirdQuestion') {
      pageView = <Question changePage={this.changePage} nextPage={'feed'}
        editSources={this.editSources}
        question={this.state.questionOptions[2].question}
        titleQuestion={this.state.questionOptions[2].titleQuestion}
        options={this.state.questionOptions[2].options}/>;
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
