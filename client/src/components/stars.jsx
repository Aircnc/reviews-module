import React from 'react';


const Stars = (props) => {

  return (
    <div className="all-stars">
      <div className="left-stars">

        <div className="lone-star-rate">
          <div className="lone-names font"> Accuracy </div>
          <div className="lone-stars star-ratings-css">
            <div className="star-ratings-css-top" style={{width: `${props.list_data.accuracy*100/5}%`}}>
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
            <div className="star-ratings-css-bottom">
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
          </div>
        </div>

        <div className="lone-star-rate">
          <div className="lone-names font"> Communication </div>
          <div className="lone-stars star-ratings-css">
            <div className="star-ratings-css-top" style={{width: `${props.list_data.communication*100/5}%`}}>
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
            <div className="star-ratings-css-bottom">
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
          </div>
        </div>

        <div className="lone-star-rate">
          <div className="lone-names font"> Cleanliness </div>
          <div className="lone-stars star-ratings-css">
            <div className="star-ratings-css-top" style={{width: `${props.list_data.clean*100/5}%`}}>
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
            <div className="star-ratings-css-bottom">
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
          </div>
        </div>

      </div>
      <div className="right-stars">

        <div className="lone-star-rate">
          <div className="lone-names font"> Location </div>
          <div className="lone-stars star-ratings-css">
            <div className="star-ratings-css-top" style={{width: `${props.list_data.location*100/5}%`}}>
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
            <div className="star-ratings-css-bottom">
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
          </div>          
        </div>

        <div className="lone-star-rate">
          <div className="lone-names font"> Check-in </div>
          <div className="lone-stars star-ratings-css">
            <div className="star-ratings-css-top" style={{width: `${props.list_data.checkin*100/5}%`}}>
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
            <div className="star-ratings-css-bottom">
              <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
            </div>
          </div>
        </div>

        <div className="lone-star-rate">
          <div className="lone-names font"> Value </div>
          <div className="lone-stars star-ratings-css">
            <div className="star-ratings-css-top" style={{width: `${props.list_data.value*100/5}%`}}>
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



