import React from 'react';
import { shallow, mount, render } from 'enzyme';
import List from '../client/src/components/list.jsx';
import ListEntry from '../client/src/components/listEntry.jsx';
// import ReadMoreButton from '../client/src/components/listEntry.jsx';

const review = {
  "id": 281,
  "user": "Albertha",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg",
  "date": "September 2014",
  "content": "Eos nam perferendis. Eaque qui sint id. Enim et non fugit iusto similique expedita laborum. Omnis neque quisquam at temporibus molestiae optio.",
  "response": null,
  "createdAt": "2018-10-30T02:17:01.000Z",
  "updatedAt": "2018-10-30T02:17:01.000Z",
  "ListingId": 33
};


describe('Lists components mapping', () => {

  it('check that there are more than one list entry for reviews', () => {
    const listEntry = mount(<ListEntry review={review} key={review.id} />);
    expect(listEntry.find('button')).toHaveLength(1);
  });

  it('check the instance of handleReadMore', () => {
    const content = 'This test is supposed to expand content and change state showMore'
    const wrapper = mount(<ListEntry review={review} key={review.id} />);
    wrapper.find('button').simulate('click');
    expect(wrapper.state('showMore')).toBe(true);
  });
});


		// expect(listEntry.state('showMore')).toBe(false);
		// expect(listEntry.state('showMore')).toBe(true);