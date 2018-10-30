// import React from 'react';
// import ReactDom from 'react-dom';
import ListEntry from './listEntry.jsx';


const List = (props) => {
  // console.log(props.review_data)
  return (
    <div>
      {props.review_data.map((review, i) => {
        return (
          <ListEntry review={review} key={i}/>
        )
      })}
    </div>
  )
};

export default List;