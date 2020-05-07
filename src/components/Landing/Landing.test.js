import React from 'react'
import ReactDom from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Landing from './Landing'
import { BrowserRouter } from 'react-router-dom'

describe('Landing Page Component', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });

  it('renders Landing', () => {

    const wrapper = shallow(
      <BrowserRouter>
        <Landing/>
      </BrowserRouter>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  })

})