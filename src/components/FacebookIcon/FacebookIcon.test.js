import React from 'react';
import FacebookIcon from './FacebookIcon';
import renderer from 'react-test-renderer';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter});

const noProps = shallow(<FacebookIcon/>);

it('should match a snapshot', ()=>{
    const tree = renderer.create(<FacebookIcon/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render with no props', ()=>{
    expect(noProps.exists()).toEqual(true);
})