import React from 'react';
import PinterestIcon from './PinterestIcon';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<PinterestIcon/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});