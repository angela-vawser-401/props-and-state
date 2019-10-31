import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('Random Color Component', () => {
  it('renders Random Color', () => {
    const wrapper = shallow(<RandomColor />);
    wrapper.setState({ backgroundColor: 'black' });
    expect(wrapper).toMatchSnapshot();
  });
});
