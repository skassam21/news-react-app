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

	  let containerStyle = {
	     textAlign: 'center',
       margin: 'auto',
       position: 'absolute',
       top : '30%',
       left : '0',
       right : '0'
    }

    let buttonStyle = {
      margin: '5px',
      marginTop: '15px'
    }

    return (
      <div className="container" style={containerStyle}>
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2">
              <h1>Welcome to NewsEd!</h1>
        		  <p>NewsEd helps you find news articles that are personalized to you! Fill out our quick survey to get access to a list
              of articles that fit your tastes and needs.</p>
            <button className="btn btn-primary" onClick={this.getStarted}
                style={buttonStyle}>GET STARTED</button>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
