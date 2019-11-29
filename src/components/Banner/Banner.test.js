import React from 'react';
import renderer from 'react-test-renderer';
import Banner from './Banner';

it('matches a snapshot', ()=>{

    const tree = renderer.create(<Banner/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
})