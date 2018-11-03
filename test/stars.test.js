import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Stars from '../client/src/components/stars.jsx';
// import Reviews from '../client/src/components/reviews.jsx';
// import List from '../client/src/components/list.jsx';

  	const dummy_data = {
    "id": 15,
    "owner": "Marquis",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/thehacker/128.jpg",
    "accuracy": 3,
    "location": 3,
    "communication": 0,
    "checkin": 5,
    "clean": 3,
    "value": 3,
    "createdAt": "2018-10-30T02:17:01.000Z",
    "updatedAt": "2018-10-30T02:17:01.000Z"
}

describe('<Stars /> rendering', () => {
  it('should render stars correctly', () => {
    const component = shallow(<Stars list_data={dummy_data} />);
    expect(component.exists()).toBe(true);
  });
});

  // it('should render six "StarsRate" styled components', () => {
  //   const component = shallow(<Stars list_data={dummy_data} />);
  //   expect(component.find('StarRate').exists()).toBe(true);
  //   expect(component.find('LoneNames').length).toBe(6);
  //   expect(component.find('AllStars').length).toBe(1);
  // });