import React from 'react'
import ReactDom from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Login from './Login'
import { BrowserRouter } from 'react-router-dom'

describe('Login Page Component', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });

  it('renders Login', () => {

    const wrapper = shallow(
      <BrowserRouter>
        <Login/>
      </BrowserRouter>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  })

})