

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

export default ListEntry;