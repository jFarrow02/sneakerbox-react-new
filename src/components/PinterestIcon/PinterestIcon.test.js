import React from 'react';
import PinterestIcon from './PinterestIcon';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});
const noProps = shallow(<PinterestIcon/>);

it('should match a snapshot', ()=>{
    const tree = renderer.create(<PinterestIcon/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render when passed no props', ()=>{
    expect(noProps.exists()).toEqual(true);
});