import React from 'react';
import Thumbnail from './Thumbnail';
import renderer from 'react-test-renderer';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
const noProps = shallow(<Thumbnail/>);

it('should match a snapshot', ()=>{
    const tree = renderer.create(<Thumbnail/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render when passed no props', ()=>{
    expect(noProps.exists()).toEqual(true);
});