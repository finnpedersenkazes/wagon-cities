import React from 'react';
import City from './city'

const CityList = (props) => {

  const renderList = () => {
    return props.cities.map((city) => {
      return (
        <City
          key={city.name}
          city={city}
        />
      )
    })
  }

  return (
    <div className="cities">
      {renderList()}
    </div>
  )
}

export default CityList;
