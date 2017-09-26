import React, { Component } from 'react';
import { setActiveCity } from '../actions';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class City extends Component {

  handleClick = (event) => {
    // console.log(props.city.name)
    this.props.setActiveCity(this.props.city)
    event.preventDefault();
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h2>{this.props.city.name}</h2>
        <p>{this.props.city.address}</p>
        <p>{this.props.city.slug}</p>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity: setActiveCity },
    dispatch
  );
}

export default connect(null, mapDispatchToProps) (City);
