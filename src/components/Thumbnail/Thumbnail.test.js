import React from 'react';
import Thumbnail from './Thumbnail';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<Thumbnail/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})