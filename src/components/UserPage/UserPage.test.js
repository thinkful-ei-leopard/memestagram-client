import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { BrowserRouter } from 'react-router-dom';
import UserPage from './UserPage';

describe('User Page Component', () => {
  
  const defaultProps = {
    match: {params: {postId: 1}}
  }

  it('UserPage renders without crashing', () =>{
    const div = document.createElement('div');
  ReactDom.render(
    <BrowserRouter>
      <UserPage {...defaultProps}/>
    </BrowserRouter>,
    div
  );
  ReactDom.unmountComponentAtNode(div);
  });

  it('renders User Page', () => {

    const wrapper = shallow(
      <BrowserRouter>
        <UserPage {...defaultProps}/>
      </BrowserRouter>
    )
    
    expect(toJson(wrapper)).toMatchSnapshot();
  })

})