import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import List from './list.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list_data: [],
      review_data: [],
      satisfied: 'I love this product!!',
      unhappy: 'Arrived late and damaged :('
    };
  }

  componentDidMount() {
    const id = 33;

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
    // console.log(this.state)
    return (
      <div>
        <div>
        <span className="FiveStar__FiveStarTop-hLclkH cJfAex" width="NaN"><span className="FiveStar__SingleStar-Vpwis bUXsVT">★</span><span className="FiveStar__SingleStar-Vpwis bUXsVT">★</span><span className="FiveStar__SingleStar-Vpwis bUXsVT">★</span><span className="FiveStar__SingleStar-Vpwis bUXsVT">★</span><span className="FiveStar__SingleStar-Vpwis bUXsVT">★</span></span>

        <div> REVIEWS
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
