import React from 'react';
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { BrowserRouter } from 'react-router-dom'
import Button from './Button'

describe('Button Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Button />
      </BrowserRouter>, 
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders Button as expected', () => {
    const tree = renderer
      .create(<Button />)
      .toJSON();
    expect(tree).toMatchSnapshot()
  })
})