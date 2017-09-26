import React, { Component } from 'react';
import City from './city'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setActiveCity } from '../actions';

class ActiveCity extends Component {

  render() {
    if (this.props.city) {
      return (
        <div className="active-city">
          <h1>{this.props.city.name}</h1>
          <h2>{this.props.city.address}</h2>
        </div>
      );
    } else
    { return (
        <div>
          <p>Please, click on a city</p>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    city: state.activeCity
  };
}

export default connect(mapStateToProps) (ActiveCity);
