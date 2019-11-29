import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import CaptionedImage from './CaptionedImage';

configure({adapter: new Adapter()});

/*
Shallow rendering is useful to constrain yourself to testing a component as a unit,
and to ensure that your tests aren't indirectly asserting on behavior of child components.
*/
const caption = 'This is a caption.';
const wrapper = shallow(<CaptionedImage caption={caption}><div className='child'></div></CaptionedImage>);
const noProps = shallow(<CaptionedImage/>);

it('should match a snapshot', ()=>{
    const tree = renderer.create(<CaptionedImage/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render a caption', ()=>{
    expect(wrapper.exists('.CaptionedImage--caption')).toEqual(true);
    expect(wrapper.text()).toMatch(caption);
});

it('should render children', ()=>{
    expect(wrapper.exists('.child')).toEqual(true);
});

it('should render with no props', ()=>{
    expect(noProps.exists()).toEqual(true);
})