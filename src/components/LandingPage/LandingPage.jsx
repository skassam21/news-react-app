import React, { Component } from 'react';

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.getStarted = () => this._getStarted();
  }

  _getStarted() {
    this.props.changePage('firstQuestion');
  }


  render() {
	  
	  let jumbotronStyle = {
      backgroundColor: '#fcde64',
	  borderRadius: '20px',
	  border: '2px solid black',
	  textAlign: 'center',
      width: '60%',
	  margin: 'auto',
	  position: 'absolute',
	  top : '20%',
	  left : '0',
      right : '0',
    }

    let questionFont = {
      fontFamily: 'TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif',
      fontSize: '36px',
      userSelect: 'none',
	  margin: 0,
    }
	
	let questionFontSmall = {
      fontFamily: 'TimesNewRoman,Times New Roman,Times,Baskerville,Georgia,serif',
      fontSize: '18px',
      userSelect: 'none',
	  fontStyle: 'italics',
	  margin: '15px',
    }
	  
    return (
      <div className="jumbotron" style={jumbotronStyle}>
          <h1 style={questionFont}>Welcome to NewsEd!</h1>
		  <h1 style={questionFontSmall}>An application to help you find interesting news articles</h1>
		  <br/>
          <button className="btn btn-primary" onClick={this.getStarted}
            style={{margin: '5px'}}>Get Started</button>
        </div>
    )
  }
}

export default LandingPage;
