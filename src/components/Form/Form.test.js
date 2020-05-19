import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Label, Input, Required, Textarea} from './Form';

it('Label renders without crashing', () =>{
  const div = document.createElement('div');
 ReactDom.render(
   <BrowserRouter>
    <Label />
   </BrowserRouter>,
   div
 );
 ReactDom.unmountComponentAtNode(div);
});

it('Input renders without crashing', () =>{
  const div = document.createElement('div');
 ReactDom.render(
   <BrowserRouter>
    <Input />
   </BrowserRouter>,
   div
 );
 ReactDom.unmountComponentAtNode(div);
});

it('Required renders without crashing', () =>{
  const div = document.createElement('div');
 ReactDom.render(
   <BrowserRouter>
    <Required />
   </BrowserRouter>,
   div
 );
 ReactDom.unmountComponentAtNode(div);
});

it('Textarea renders without crashing', () =>{
  const div = document.createElement('div');
 ReactDom.render(
   <BrowserRouter>
    <Textarea />
   </BrowserRouter>,
   div
 );
 ReactDom.unmountComponentAtNode(div);
});