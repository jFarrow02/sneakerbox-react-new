import React from 'react';
import Copyright from './Copyright';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});
const noProps = shallow(<Copyright/>);

it('should match a snapshot', ()=>{
    const tree = renderer.create(<Copyright/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render when passed no props', ()=>{
    expect(noProps.exists()).toEqual(true);
});

it('should render the current year', ()=>{
    const now = new Date(Date.now());
    const currentYear = now.getUTCFullYear();
    expect(noProps.contains(currentYear)).toEqual(true);
});