import React from 'react';
import Nav from './Nav';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<BrowserRouter><Nav/></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});