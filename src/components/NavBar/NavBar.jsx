import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let navBarStyle = {
      position: 'fixed',
      zIndex: '100',
      width: '100%'
    }

    return (
      <nav className="navbar navbar-inverse" style={navBarStyle}>
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
