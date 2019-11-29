import React from 'react';
import renderer from 'react-test-renderer';
import CaptionedImage from './CaptionedImage';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<CaptionedImage/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})