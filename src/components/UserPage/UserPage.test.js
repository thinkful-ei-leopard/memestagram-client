import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import UserPage from './UserPage';

it('UserPage renders without crashing', () =>{
  const div = document.createElement('div');
 ReactDom.render(
   <BrowserRouter>
    <UserPage />
   </BrowserRouter>,
   div
 );
 ReactDom.unmountComponentAtNode(div);
});