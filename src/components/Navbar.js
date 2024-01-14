import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
 
  render() {
    return (
      <nav className={`navbar fixed-top navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode} text-${this.props.mode==='light'?'dark':'light'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">EasyReads</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
              </li>
            </ul>
            <div className="custom-control custom-switch">
                  <input type="checkbox" className="custom-control" id="customSwitches" onClick={this.props.handleMode}/>
              <label>Toggle mode</label>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
