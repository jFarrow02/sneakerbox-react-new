import React from 'react';
import TestComponent from './TestComponent';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});
const wrapper = shallow(<TestComponent foo='bar'/>);

it('should match a snapshot', ()=>{
    const tree = renderer.create(<TestComponent/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render when passed no props', ()=>{
    expect(wrapper.exists()).toBeTruthy();
});

it('should render foo', ()=>{
    expect(wrapper.text()).toMatch(/bar/);
})