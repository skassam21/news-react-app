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
    return (
      <div className="row">
        <div className="col-lg-12">
          <h1>Welcome to NewsEd!</h1>
          <button className="btn btn-primary" onClick={this.getStarted}
            style={{marginTop: '20px'}}>Get Started</button>
        </div>
      </div>
    )
  }
}

export default LandingPage;
