import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Reviews from '../client/src/components/reviews.jsx';
import List from '../client/src/components/list.jsx';

describe('<Reviews />', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Reviews />);
    // expect(component).toMatchSnapshot();
    expect(component.exists()).toBe(true);
  });

  it('should render a "List" component', () => {
    const component = shallow(<Reviews />);
    expect(component.find(List).length).toBe(1);
  });
});

describe('<Reviews /> functionality', () => {
  it('check the instance of componentDidMount', () => {
    const wrapper = shallow(<Reviews />);
    wrapper.instance().componentDidMount();
  });

  it('check the instance of handleChange', () => {
    const object = {target: {value: 'this works'}};
    const wrapper = mount(<Reviews />);
    wrapper.find('input').simulate('change', object);
    expect(wrapper.state('query')).toBe('this works');
    // wrapper.instance().handleChange();
  });

  it('check the instance of handleSearch', () => {
    const wrapper = mount(<Reviews />);
    const query = 'hello';
    const array = [{ content: 'hi' }, { content: 'bye' }, { content: 'hello' }];
    wrapper.setState({ review_data: array, query });
    wrapper.instance().handleSearch({ key: 'Enter' });
    // wrapper.find('input').simulate('keypress', query, array);
    expect(wrapper.state('filter_data')).toHaveLength(1);
  });

  it('check the instance of handleOpenModal', () => {
    const wrapper = shallow(<Reviews />);
    wrapper.instance().handleOpenModal();
  });

  it('check the instance of handleCloseModal', () => {
    const wrapper = shallow(<Reviews />);
    wrapper.instance().handleCloseModal();
  });
});

