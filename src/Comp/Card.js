import React from "react";

export default function Card(props) {
  const { car } = props;
  return (
    <div class="resultCard">
      <figure className="image is-48x48">
        <img
          src={car.image}
          alt= {car.Title}
        />
      </figure>
      <h4 class="bolder">{car.name}</h4>
      <span><b>Year:</b>{car.Year}</span>
    </div>
  );
}