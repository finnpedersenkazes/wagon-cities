import React, { Component } from 'react';

const City = (props) => {

  return (
    <div>
      <h2>{props.city.name}</h2>
      <p>{props.city.address}</p>
      <p>{props.city.slug}</p>
    </div>
  );
}

export default City;

//JS dans JSX
