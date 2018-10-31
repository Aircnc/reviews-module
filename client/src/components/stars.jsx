import React from 'react';


const Stars = (props) => {
  return (
    <div className="all-stars">
      <div className="left-stars">
        <div className="lone-star"> Accuracy

          <div className="star-ratings-css">
            <div className="star-ratings-css-top" style={{width: `${starTotalPercent}%`}}>
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
            <div className="star-ratings-css-bottom">
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
          </div>

        </div>
        <div className="lone-star"> Communication

          <div className="star-ratings-css">
            <div className="star-ratings-css-top" style={{width: `${starTotalPercent}%`}}>
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
            <div className="star-ratings-css-bottom">
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
          </div>

        </div>
        <div className="lone-star"> Cleanliness

          <div className="star-ratings-css">
            <div className="star-ratings-css-top" style={{width: `${starTotalPercent}%`}}>
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
            <div className="star-ratings-css-bottom">
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
          </div>

        </div>
      </div>
      <div className="right-stars">
        <div className="lone-star"> Location

          <div className="star-ratings-css">
            <div className="star-ratings-css-top" style={{width: `${starTotalPercent}%`}}>
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
            <div className="star-ratings-css-bottom">
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
          </div>          

        </div>
        <div className="lone-star"> Check-in

          <div className="star-ratings-css">
            <div className="star-ratings-css-top" style={{width: `${starTotalPercent}%`}}>
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
            <div className="star-ratings-css-bottom">
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
          </div>

        </div>
        <div className="lone-star"> Value

          <div className="star-ratings-css">
            <div className="star-ratings-css-top" style={{width: `${starTotalPercent}%`}}>
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
            <div className="star-ratings-css-bottom">
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Stars;

const ListEntry = (props) => {
  // console.log(props)
  return (
    <div> 
      <img src={props.review.avatar} alt={props.review.user} className="avatar" /> 
      <div> {props.review.user} </div>
      <div> {props.review.date} </div>
      <div> {props.review.content} </div>
    </div>
  )
};

