import React from 'react';
import Image from './Image';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});
const noProps = shallow(<Image/>);

it('should match a snapshot', ()=>{
    const tree = renderer.create(<Image/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render when passed no props', ()=>{
    expect(noProps.exists()).toEqual(true);
});