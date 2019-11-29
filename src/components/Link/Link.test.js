import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
const noProps = shallow(<Link/>);

it('should match a snapshot', ()=>{
    const tree = renderer.create(<Link/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render when passed no props', ()=>{
    expect(noProps.exists()).toEqual(true);
});