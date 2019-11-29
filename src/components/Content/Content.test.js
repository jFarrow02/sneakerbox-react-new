import React from 'react';
import Content from './Content';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<BrowserRouter><Content/></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});