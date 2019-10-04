import React from "react";
import styled from "styled-components";

const ImageCover = styled.div`
  background: ${props => `url(${props.src}) no-repeat center center`};
  background-size: cover;
  padding-bottom: 60%;
`;

const Card = ({ list }) => (
  <div className="card mt-3 w-100">
    <ImageCover
      src={
        list.photos &&
        list.photos.length > 0 &&
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=767&photoreference=${
          list.photos[0]["photo_reference"]
        }&sensor=false&key=AIzaSyBpXaSIHmQtgeaHumBfoPdHfmP3ZcHssgA`
      }
    />
    <div className="card-body">
      <h5 className="card-title font-weight-bold">{list.name}</h5>
      <p className="card-text  font-weight-lighter">
        <span class="badge badge-warning badge-pill mr-2">{list.rating}</span>
        {list.opening_hours && list.opening_hours["open_now"] ? (
          <span class="badge badge-success badge-pill">Open</span>
        ) : (
          <span class="badge badge-secondary badge-pill">Close</span>
        )}
      </p>

      <p className="card-text">{list.formatted_address}</p>

      {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
    </div>
  </div>
);

export default Card;

// location={list.formatted_address}
