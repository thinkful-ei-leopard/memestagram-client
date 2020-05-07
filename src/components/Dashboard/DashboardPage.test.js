import React from 'react';
import ReactDom from 'react-dom';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import DashboardPage from './DashboardPage';
import DashPost from './DashPost';
import { BrowserRouter } from 'react-router-dom';

describe('Dashboard Page Component', () => {
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDom.render(
      <BrowserRouter>
        <DashboardPage />
      </BrowserRouter>,
      div
    );
    ReactDom.unmountComponentAtNode(div);
  });

  it('renders Dashboard and post', () => {
    const post = {
      id: 1,
      userImg: 'https://i.insider.com/5c59e77ceb3ce80d46564023?width=600&format=jpeg&auto=webp',
      user_id: 1,
      username: 'Shrek',
      memeImg: 'https://live.staticflickr.com/5611/15033991623_66352974b6_z.jpg',
      description: 'test'
    } 

    const wrapper = shallow(
      <BrowserRouter>
        <DashboardPage>
          <DashPost
          key={post.id}
          post={post}
          />
        </DashboardPage>
      </BrowserRouter>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  })

})