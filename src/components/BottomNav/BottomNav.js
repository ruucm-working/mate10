import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom';
import './BottomNav.scss';
import { log } from 'ruucm-util'
import PropTypes from 'prop-types';


export default class BottomNavComponent extends Component {
  render() {
    return (
    <div id="blogmenu" className="bottom-nav">
      <div className="using-icons-default-style">
        <div className="row">
          <div className="col-3">
            <Link to='/'>
            <span className="chief-mate chief-mate-user" />
              <p>About</p>
            </Link>
          </div>
          <div className="col-3">
            <Link to='data-01'>
            <span className="chief-mate chief-mate-bar-graph" />
              <p>Data 01</p>
            </Link>
          </div>
          <div className="col-3">
            <Link to='data-02'>
            <span className="chief-mate chief-mate-circular-graph" />
              <p>Data 02</p>
            </Link>
          </div>
          <div className="col-3"><div className="center-icon">
            <span className="chief-mate chief-mate-github"/>
            <a href="https://github.com/chief-mate/mate10">
              <p>Github</p>
            </a></div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}



