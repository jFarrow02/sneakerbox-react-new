import React from 'react';
import Content from './Content';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {BrowserRouter, Route} from 'react-router-dom';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

it('should match a snapshot', ()=>{
    const tree = renderer.create(<BrowserRouter><Content/></BrowserRouter>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should mount a Route', ()=>{
    const mounted = mount(<BrowserRouter><Content/></BrowserRouter>);
    expect(mounted.contains(Route)).toEqual(true);
    expect(mounted.children().length).toEqual(1);
});