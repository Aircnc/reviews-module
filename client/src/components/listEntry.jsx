import React from 'react';


class ListEntry extends React.Component {
  constructor(props) {
    super(props)

    this.state = ({
      showMore: false
    })
  }

  render() {
    return (
      <div> 
        <img src={this.props.review.avatar} alt={this.props.review.user} className="avatar" /> 
        <div> {this.props.review.user} </div>
        <div> {this.props.review.date} </div>
        <div> {this.props.review.content} </div>
      </div>
    ); 
  }
}


export default ListEntry;