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



// it('should render correctly with no props', () => {
//   const component = shallow(<MyComponent/>);
  
//   expect(component).toMatchSnapshot();
// });
// it('should render banner text correctly with given strings', () => {
//   const strings = ['one', 'two'];
//   const component = shallow(<MyComponent list={strings} />);
//   expect(component).toMatchSnapshot();
// });


