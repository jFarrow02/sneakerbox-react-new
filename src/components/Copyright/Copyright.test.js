import React from 'react';
import Copyright from './Copyright';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<Copyright/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})