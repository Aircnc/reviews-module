// import ReactDom from 'react-dom';
import React from 'react';
import axios from 'axios';
import List from './list.jsx';


class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list_data: [],
      review_data: [],
      // satisfied: 'I love this product!!',
      // unhappy: 'Arrived late and damaged :('
    };
  }

  componentDidMount() {

    const id = window.location.href.slice(31, -1)
    // console.log(id)

    axios.get(`/listings/${id}/reviews`)
      .then((response) => {
        // console.log(response)
        this.setState({
          review_data: response.data
        });
      })
      .catch((error) => console.log(error))

    axios.get(`/listings/${id}/listings`)
      .then((response) => {
        // console.log(response)
        this.setState({
          list_data: response.data
        });
      })
      .catch((error) => console.log(error))
  }


  render() {

    // console.log(this.state.list_data)
    const arr = [ this.state.list_data.accuracy,
                  this.state.list_data.communication,
                  this.state.list_data.clean,
                  this.state.list_data.location,
                  this.state.list_data.checkin,
                  this.state.list_data.value ];
    
    const starAvg = (arr) => arr.reduce((a,b) => a + b) / arr.length;

    const starTotalPercent = starAvg(arr) / 5 * 100;

    // console.log(starTotalPercent)

    return (
      <div>
        <div>

        <div className="star-ratings-css">
          <div className="star-ratings-css-top" style={{width: `${starTotalPercent}%`}}>
            <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
          </div>
          <div className="star-ratings-css-bottom">
            <span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span><span className="star-spacing">★</span>
          </div>
        </div>

        <br/>

          <input type="text" className="_x49i5cv" id="p3-ReviewsSearchBox" name="p3-ReviewsSearchBox" placeholder="Search reviews" value=""/>
        
        

        <br/><br/>  
          REVIEWS
        <br/><br/> 
        
        <div> 
          <List review_data={this.state.review_data} />
        </div> 

          <h3><strong>JenSpring50214</strong> "{this.state.satisfied}"</h3>
          <p>
            My new camera is awesome! 
          </p>
          <span>Verified Buyer 2010</span>
        </div>
        <div>
          <h3><strong>SpaceCadetHero421</strong> "{this.state.unhappy}"</h3>
          <p>
            I bought this item from yourphotogrpahywarehouse hoping to replace my old starter DSLR. 
          </p>
          <span>Verified Buyer 2011</span>
        </div>

      </div>
    );
  }
}


export default Reviews;

        // <span className="FiveStar__FiveStarTop-hLclkH cJfAex" width="NaN"><span className="FiveStar__SingleStar-Vpwis bUXsVT">★</span><span className="FiveStar__SingleStar-Vpwis bUXsVT">★</span><span className="FiveStar__SingleStar-Vpwis bUXsVT">★</span><span className="FiveStar__SingleStar-Vpwis bUXsVT">★</span><span className="FiveStar__SingleStar-Vpwis bUXsVT">★</span></span>

        // <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style="height:1em;width:1em;display:block;fill:currentColor"><path d="m10.4 18.2c-4.2-.6-7.2-4.5-6.6-8.8.6-4.2 4.5-7.2 8.8-6.6 4.2.6 7.2 4.5 6.6 8.8-.6 4.2-4.6 7.2-8.8 6.6m12.6 3.8-5-5c1.4-1.4 2.3-3.1 2.6-5.2.7-5.1-2.8-9.7-7.8-10.5-5-.7-9.7 2.8-10.5 7.9-.7 5.1 2.8 9.7 7.8 10.5 2.5.4 4.9-.3 6.7-1.7v.1l5 5c .3.3.8.3 1.1 0s .4-.8.1-1.1" fill-rule="evenodd"></path></svg>
