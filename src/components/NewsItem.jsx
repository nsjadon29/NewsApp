import React, { Component } from "react";

const NewsItem=(props)=> {
    let { title, description, imageUrl, newsUrl, author, date } = props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://ichef.bbci.co.uk/images/ic/1200x675/p0j6xg1f.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href={newsUrl} className="btn btn-sm btn-dark">
              Read more
            </a>
            <p className="card-text"><small className="text-body-secondary">By {author} dated {new Date(date).toGMTString()}</small></p>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
