import React from 'react'
import ReactDom from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import PhotoView from './PhotoView'
import Comments from './Comments'
import { BrowserRouter } from 'react-router-dom'

describe('PhotoView Page Component', () => {
  
  const defaultProps = {
    match: {params: {postId: 1}}
  }


  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <BrowserRouter>
        <PhotoView 
          {...defaultProps}
        />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });

  it('renders PhotoView', () => {
    const comments = {
      id: 1,
      user_id: 1,
      username: 'test',
      comment: 'testststs'
    }

    const wrapper = shallow(
      <BrowserRouter>
        <PhotoView {...defaultProps}>
          <Comments 
            key={comments.id} user={comments.username} user_id={comments.user_id} comment={comments.comment}
          />
        </PhotoView>
      </BrowserRouter>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  })

})