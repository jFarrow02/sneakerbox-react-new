import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Banner from './Banner';

configure({adapter: new Adapter()});

const wrapper = shallow(<Banner title='Banner Test'/>);

//Test whether serialized component matches snapshot file. Useful for checking
//whether or not component implementation has changed.
it('matches a snapshot', ()=>{
    const tree = renderer.create(<Banner/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

//Check that component renders properly when passed props.
it('should render a title', ()=>{
    expect(wrapper.text()).toMatch(/Banner\sTest/);
})