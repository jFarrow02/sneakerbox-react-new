import React from 'react';
import ThumbnailGroup from './ThumbnailGroup';
import renderer from 'react-test-renderer';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
const noProps = shallow(<ThumbnailGroup/>);

it('should match a snapshot', ()=>{
    const tree = renderer.create(<ThumbnailGroup/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render when passed no props', ()=>{
    expect(noProps.exists()).toEqual(true);
});