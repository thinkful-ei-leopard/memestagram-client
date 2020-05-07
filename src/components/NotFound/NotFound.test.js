import React from 'react'
import ReactDom from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NotFound from './NotFound'
import { BrowserRouter } from 'react-router-dom'

describe('NotFound Page Component', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });

  it('renders NotFound', () => {

    const wrapper = shallow(
      <BrowserRouter>
        <NotFound/>
      </BrowserRouter>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  })

})