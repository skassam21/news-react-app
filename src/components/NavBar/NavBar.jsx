import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">NewsEd</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar;
