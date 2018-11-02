// import ReactDom from 'react-dom';
import React from 'react';
import axios from 'axios';
import List from './list.jsx';
import Stars from './stars.jsx';
import styled from 'styled-components';


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
    });
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
          <Line />
          <ReviewBarTotal>
            <ReviewNameTotal><strong> {this.state.review_data.length} Reviews </strong></ReviewNameTotal>
            <StarRateTotal>
              <StarRateTotalTop style={{ width: `${starTotalPercent}%` }}>
                <StarSpacingTotal>★</StarSpacingTotal>
                <StarSpacingTotal>★</StarSpacingTotal>
                <StarSpacingTotal>★</StarSpacingTotal>
                <StarSpacingTotal>★</StarSpacingTotal>
                <StarSpacingTotal>★</StarSpacingTotal>
              </StarRateTotalTop>
              <StarRateTotalBottom>
                <StarSpacingTotal>★</StarSpacingTotal>
                <StarSpacingTotal>★</StarSpacingTotal>
                <StarSpacingTotal>★</StarSpacingTotal>
                <StarSpacingTotal>★</StarSpacingTotal>
                <StarSpacingTotal>★</StarSpacingTotal>
              </StarRateTotalBottom>
            </StarRateTotal>        
            <br />
            <Search type="text" placeholder="Search reviews" value={this.state.query} onChange={this.handleChange}  onKeyPress={ (e) => this.handleSearch(e) } />
          </ReviewBarTotal>
        
          <Line />

          <br />
          <Stars list_data={this.state.list_data} />
          <br /><br />

          REVIEWS BELOW
          <br /><br />
          <div>
            <List review_data={this.state.filter_data} />
          </div>

        </div>
      </div>
    );
  }
}


export default Reviews;


// Styled Components

const Line = styled.div`
  border-bottom: 1px solid var(--color-divider, #EBEBEB) !important;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const StarRateTotal = styled.div`
  unicode-bidi: bidi-override;
  color: rgb(216, 216, 216);
  font-size: 23px;
  width: 123px;
  position: relative;
  padding: 0;
  text-shadow: 0px 0.5px 0 #a2a2a2;
`;

const StarRateTotalTop = styled.div`
  color: rgb(0, 132, 137);
  padding: 0;
  position: absolute;
  z-index: 1;
  display: block;
  top: 0;
  left: 0;
  overflow: hidden;
`;

const StarRateTotalBottom = styled.div`
  padding: 0;
  display: block;
  z-index: 0;
`;

const StarSpacingTotal = styled.span`
  margin-right: 2px;
`;

const ReviewBarTotal = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 20px;
`;

const ReviewNameTotal = styled.h3`
  font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
  color: #484848;
  font-size: 24px;
  margin: 0;
  padding-right: 16px;
`;

const Search = styled.input`
  width: auto;
  height: 18px;
  padding: 7px;
  margin-left: auto;
`;
