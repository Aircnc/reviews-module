import ReactDOM from 'react-dom';
import Nav from './components/nav.jsx';
import Reviews from './components/reviews.jsx';

// window.Reviews = Reviews;

ReactDOM.render(<Nav />, document.getElementById('navBar'));

ReactDOM.render(<Reviews />, document.getElementById('reviews'));
