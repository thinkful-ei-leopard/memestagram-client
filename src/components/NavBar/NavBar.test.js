import React from 'react'
import ReactDom from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NavBar from './NavBar'
import { BrowserRouter } from 'react-router-dom'

describe('NavBar Page Component', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });

  it('renders NavBar', () => {

    const wrapper = shallow(
      <BrowserRouter>
        <NavBar/>
      </BrowserRouter>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  })

})