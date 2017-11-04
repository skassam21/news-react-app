import React, { Component } from 'react';

class NavBar extends Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">NewsEd</a>
          </div>
          <ul className="nav navbar-nav navbar-right" style={{marginTop: 0}}>
            <li><a style={{paddingTop: '10px', paddingBottom: 0}} data-toggle="modal" data-target="#settingsModal"><i className="fa fa-cog" style={{fontSize: '2em'}}></i></a></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;
