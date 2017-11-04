import React, { Component } from 'react';

class QuestionOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }

    this.onClickImg = () => this._onClickImg();
  }

  _onClickImg() {
    this.props.onClickImg(this.props.options);
  }

  render() {
    let imgStyle = {
      backgroundImage: 'url(' + this.props.options.img + ')',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      WebkitBackgroundSize: 'cover',
      MozBackgroundSize: 'cover',
      OBackgroundSize: 'cover',
      backgroundSize: 'cover',
      height: '150px',
      width: '95%',
      margin: '20px auto 0',
      borderRadius: '10px',
      cursor: 'pointer'
    }

    let overlayStyle = {
      width: '100%',
      height: '100%',
      borderRadius: '10px'
    }

    let textStyle = {
      position: 'absolute',
      width: '90%',
      bottom: 0,
      textAlign: 'center',
      color: 'white',
      marginLeft: 'auto',
      marginRight: 'auto',
      left: '0',
      right: '0'
    }

    let checkIconStyle = {
      position: 'absolute',
      top: 5,
      right: 5,
      fontSize: '1.5em'
    }

    let imgClassName = 'img-option';
    let checkClassName = "glyphicon";
    if (this.props.options.isActive) {
      imgClassName += ' active';
    }

    return (
      <div className="col-md-4">
        <div style={imgStyle} onClick={this.onClickImg} className={imgClassName}>
          <div className="overlay" style={overlayStyle}>
            <p className="checkIcon" style={checkIconStyle}><span className='glyphicon glyphicon-check'></span></p>
            <p className="uncheckIcon" style={checkIconStyle}><span className='glyphicon glyphicon-unchecked'></span></p>
            <h5 className="option-text" style={textStyle}>{this.props.options.question}</h5>
          </div>
        </div>
      </div>
    )
  }
}

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIds: []
    }

    this.nextQuestion = () => this._nextQuestion();
    this.onClickOption = (selectedOption) => this._onClickOption(selectedOption);

  }

  _onClickOption(selectedOption) {
    this.props.editSources(selectedOption);
  }

  /*
  Call this function to change pages and submit list
  */
  _nextQuestion() {
    // If they are none, show an error

    // Reset state of question
    this.setState({
      activeIds: []
    });
    this.props.changePage(this.props.nextPage);
  }

  render() {

    let containerStyle = {
      textAlign: 'center',
       margin: 'auto',
       position: 'absolute',
       top : '10%',
       left : '0',
       right : '0'
    }

    let onClickMethod = this.onClickOption;

    return (
        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1">
              <h1>{this.props.titleQuestion}</h1>
    		      <p>{this.props.question}</p>
            </div>
          </div>
          <div className="row">
            {
              this.props.options.map(function(options) {
                return <QuestionOption key={options.id} options={options} onClickImg={onClickMethod} />;
              })
            }
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

export default Question;
