import React from 'react';
import MyAccount from './MyAccount';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<MyAccount/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})