import React from 'react';
import FacebookIcon from './FacebookIcon';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<FacebookIcon/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})