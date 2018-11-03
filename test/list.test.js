import React from 'react';
import { shallow, mount, render } from 'enzyme';
import List from '../client/src/components/list.jsx';
import ListEntry from '../client/src/components/listEntry.jsx';

describe('Lists components mapping', () => {
  it('check that there are more than one list entry for reviews', () => {
    const dummy_data = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const list = shallow(<List review_data={dummy_data} />);
    expect(list.find(ListEntry).length).toBe(3);
  });
});
