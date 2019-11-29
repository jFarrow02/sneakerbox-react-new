import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<LoadingSpinner/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})