import React from 'react';
import Image from './Image';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<Image/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})