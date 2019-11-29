import React from 'react';
import TwitterIcon from './TwitterIcon';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<TwitterIcon/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});