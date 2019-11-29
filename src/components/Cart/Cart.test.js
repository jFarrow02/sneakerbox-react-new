import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Cart from './Cart';

configure({adapter: new Adapter()});
const noProps = shallow(<Cart/>);

it('should match a snapshot', ()=>{
    const tree = renderer.create(<Cart/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render without props', ()=>{
    expect(noProps.exists()).toEqual(true);
})