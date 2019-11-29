import React from 'react';
import Product from './Product';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<Product/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});