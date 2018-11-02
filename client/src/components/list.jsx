import React from 'react';
import ListEntry from './listEntry.jsx';
import styled from 'styled-components';


const List = ({ review_data }) => (
  <div>
    {review_data.map(review => (
      <ListEntry review={review} key={review.id} />))}
  </div>
);


export default List;
