import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <nav className="navbar navbar-dark">
        <a class="navbar-brand">NewsEd</a>
      </nav>
    )
  }
}

export default NavBar;
