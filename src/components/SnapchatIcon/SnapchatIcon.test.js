import React from 'react';
import SnapchatIcon from './SnapchatIcon';
import renderer from 'react-test-renderer';

it('should match a snapshot', ()=>{
    const tree = renderer.create(<SnapchatIcon/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})