import React from 'react'
import ReactDom from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { BrowserRouter } from 'react-router-dom'
import Spinner from './Spinner'
import UploadButton from './Upload-Button'

describe('Spinner Page Component', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <BrowserRouter>
        <Spinner />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });

  it('renders Spinner', () => {

    const wrapper = shallow(
      <BrowserRouter>
        <Spinner/>
      </BrowserRouter>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  })

})

describe('UploadButton Page Component', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <BrowserRouter>
        <UploadButton />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });

  it('renders UploadButton', () => {

    const wrapper = shallow(
      <BrowserRouter>
        <UploadButton/>
      </BrowserRouter>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  })

})