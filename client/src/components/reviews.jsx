// import ReactDom from 'react-dom';
import React from 'react';
import axios from 'axios';
import List from './list.jsx';
import Stars from './stars.jsx';


class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list_data: [],
      review_data: [],
      filter_data: [],
      query: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const id = window.location.href.slice(31, -1);
    // console.log(id)

    axios.get(`/listings/${id}/reviews`)
      .then((response) => {
        // console.log(response)
        this.setState({
          review_data: response.data,
          filter_data: response.data,
        });
      })
      .catch((error) => console.log(error));

    axios.get(`/listings/${id}/listings`)
      .then((response) => {
        // console.log(response)
        this.setState({
          list_data: response.data,
        });
      })
      .catch((error) => console.log(error));
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    })
  }

  handleSearch(e) {
    if (e.key === 'Enter') {
      const array = this.state.review_data;
      const query = this.state.query;
      // console.log(array);
      const filterReviews = array.filter(review =>
        review.content.toLowerCase().includes(query.toLowerCase()));
      // console.log(filterReviews);
      this.setState({
        filter_data: filterReviews,
      });
    }
// Object.keys(review).some(content => review[content].toLowerCase().includes(query.toLowerCase())));
  }


  render() {
    // console.log(this.state.list_data)
    // console.log(this.state.query)
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
          <div className="reviewParentLine">
            <div className="reviewLine"></div>
          </div>
          <div className="total-review-bar">   
            <h3 className="total-review total-col-name font"><strong> {this.state.review_data.length} Reviews </strong></h3>
            <div className="total-star-ratings-css total-col-star">
              <div className="total-star-ratings-css-top" style={{width: `${starTotalPercent}%`}}>
                <span className="total-star-spacing">★</span>
                <span className="total-star-spacing">★</span>
                <span className="total-star-spacing">★</span>
                <span className="total-star-spacing">★</span>
                <span className="total-star-spacing">★</span>
              </div>
              <div className="total-star-ratings-css-bottom">
                <span className="total-star-spacing">★</span>
                <span className="total-star-spacing">★</span>
                <span className="total-star-spacing">★</span>
                <span className="total-star-spacing">★</span>
                <span className="total-star-spacing">★</span>
              </div>
            </div>
                      
            <br/>
            <input type="text" className="search total-col-search" id="ReviewsSearchBox" name="ReviewsSearchBox" placeholder="Search reviews" value={this.state.query} onChange={this.handleChange}  onKeyPress={ (e) => this.handleSearch(e) } />
          </div>
        
          <div className="reviewParentLine">
            <div className="reviewLine"></div>
          </div>

          <br/>
          <Stars className="star-review-bar font" list_data={this.state.list_data} />
          <br/><br/>  

          REVIEWS
          <br/><br/>
          <div> 
            <List className="user-review-bar font" review_data={this.state.filter_data} />
          </div> 

        </div>
      </div>
    );
  }
}


export default Reviews;

