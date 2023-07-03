import React from 'react';
import { shallow } from 'enzyme';

import App from './App';
import Header from './components/Header';
import Footer from './components/Footer';

describe('<App />', () => {

  it('renders <App /> and all components', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });
});