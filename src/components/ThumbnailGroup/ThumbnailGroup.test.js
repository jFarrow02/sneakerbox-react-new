import React from 'react';
import ThumbnailGroup from './ThumbnailGroup';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<ThumbnailGroup/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})