import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import SignUp from './SignUp';

it('Signup renders without crashing', () =>{
  const div = document.createElement('div');
 ReactDom.render(
   <BrowserRouter>
    <SignUp />
   </BrowserRouter>,
   div
 );
 ReactDom.unmountComponentAtNode(div);
});