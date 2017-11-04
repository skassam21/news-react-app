import React, { Component } from 'react';
import _ from '../../../node_modules/underscore/underscore.js';

const options = [{
  'id': 1,
  'question': 'Did both Clinton and Trump collude with Russia?',
  'source': 'usa-today',
  'img': 'dist/img/trump-clinton.jpg',
  'isActive': false
}, {
  'id': 2,
  'question': 'ISIL reels from defeats in Iraq and Syria',
  'source': 'al-jazeera-english',
  'img': 'dist/img/isil.jpg'
}
];

const question = 'Select the headlines you\'d be most interested in';
const titleQuestion = 'First tell us a little about yourself';

class QuestionOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }

    this.toggleHover = () => this._toggleHover();
    this.onClickImg = () => this._onClickImg();
  }

  _toggleHover() {
    this.setState({hover: !this.state.hover});
  }

  _onClickImg() {
    this.props.onClickImg(this.props.options);
  }


  render() {
    let imgStyle = {
      background: 'url(' + this.props.options.img + ') no-repeat center center',
      height: '150px',
      width: '90%',
      margin: '0 auto',
      WebkitBackgroundSize: 'cover',
      MozBackgroundSize: 'cover',
      OBackgroundSize: 'cover',
      backgroundSize: 'cover',
      borderRadius: '10px',
      cursor: 'pointer'
    }

    let overlayStyle = {
      width: '100%',
      height: '100%',
      borderRadius: '10px'
    }

    if (this.props.options.isActive) {
      overlayStyle.background = 'rgba(10, 24, 41, 0.85)';
    } else {
      overlayStyle.background = 'rgba(10, 24, 41, 0.5)';
    }

    let textStyle = {
      position: 'absolute',
      width: '60%',
      bottom: 0,
      textAlign: 'center',
      color: 'white',
      marginLeft: 'auto',
      marginRight: 'auto',
      left: '0',
      right: '0'
    }

    if (this.state.hover) {
      textStyle.color = 'rgba(255, 255, 255, 0.7)';
    } else {
      textStyle.color = 'white';
    }

    return (
      <div className="col-md-6">
        <div style={imgStyle} onClick={this.onClickImg} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
          <div style={overlayStyle}>
            <p style={textStyle}>{this.props.options.question}</p>
          </div>
        </div>
      </div>
    )
  }
}

class FirstQuestion extends Component {
  constructor(props) {
    super(props);
    let questionOptions =  _.sample(options, 5);

    this.state = {
      questionOptions: questionOptions
    }

    this.nextQuestion = () => this._nextQuestion();
    this.onClickOption = (selectedOption) => this._onClickOption(selectedOption);

  }

  _onClickOption(selectedOption) {
    let questionOptions = this.state.questionOptions;
    questionOptions.map(option => {
      if (option.id == selectedOption.id) {
        option.isActive = !selectedOption.isActive;
      }
    });

    this.setState({
      questionOptions
    });
  }

  /*
  Call this function to change pages and submit list
  */
  _nextQuestion() {
    // If they are none, show an error

    // Change the page
    console.log(this.state.questionOptions);
     this.props.changePage('secondQuestion');
  }

  render() {

    let containerStyle = {
      textAlign: 'center',
       margin: 'auto',
       position: 'absolute',
       top : '20%',
       left : '0',
       right : '0'
    }

    let onClickMethod = this.onClickOption;

    return (
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2">
              <h1>{titleQuestion}</h1>
    		      <p>{question}</p>
              <div className="row">
                {
                  this.state.questionOptions.map(function(options) {
                    return <QuestionOption key={options.id} options={options} onClickImg={onClickMethod} />;
                  })
                }
              </div>
            </div>
          </div>
          <div className="row">
            <div style={{marginTop: '30px'}}>
                <button className="btn btn-primary" onClick={this.nextQuestion}
                  style={{margin: '5px'}}>Next</button>
            </div>
          </div>
        </div>
    )
  }

}

export default FirstQuestion;
