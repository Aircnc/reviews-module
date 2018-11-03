import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Report from '../client/src/components/report.jsx';


describe('<Report />', () => {
  it('should render Report component correctly', () => {
    const component = shallow(<Report />);
    // expect(component).toMatchSnapshot();
    expect(component.exists()).toBe(true);
  });
});