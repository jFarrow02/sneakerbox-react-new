import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<Link/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})