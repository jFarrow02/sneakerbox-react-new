import React from 'react';
import Nav from './Nav';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';
configure({adapter: new Adapter()});

const noProps = shallow(<Nav/>)
;

it('should match a snapshot', ()=>{
    const tree = renderer.create(<BrowserRouter><Nav/></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render when passed no props', ()=>{
    expect(noProps.exists()).toEqual(true);
});