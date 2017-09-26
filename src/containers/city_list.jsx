import React, { Component } from 'react';
import City from './city'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCities } from '../actions';

class CityList extends Component {

  componentWillMount() {
    this.props.setCities();
  }

  render() {
    const renderList = () => {
      return this.props.cities.map((city) => {
        return (
          <City key={city.name} city={city} />
        )
      })
    }

    return (
      <div className="cities">
        {renderList()}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities: setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

export default connect(mapStateToProps, mapDispatchToProps) (CityList);
