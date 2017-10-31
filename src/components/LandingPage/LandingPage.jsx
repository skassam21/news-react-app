import React from 'react';

function LandingPage(props) {
  return (
    <div className="row">
      <div className="col-lg-12">
        <h1>Welcome to NewsEd!</h1>
        <button className="btn btn-primary" onClick={props.childChangePage(1)}
          style={{marginTop: '20px'}}>Get Started</button>
      </div>
    </div>
  )
}

export default LandingPage;
