import React from 'react';
import Footer from './Footer';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import {FacebookIcon, PinterestIcon, SnapchatIcon, TwitterIcon} from '../../components';
configure({adapter: new Adapter()});
const wrapper = shallow(<Footer/>);

it('should match a snapshot', ()=>{
    const tree = renderer.create(<Footer/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

it('should render social media icons', ()=>{
    expect(wrapper.find(FacebookIcon)).toHaveLength(1);
    expect(wrapper.find(SnapchatIcon)).toHaveLength(1);
    expect(wrapper.find(PinterestIcon)).toHaveLength(1);
    expect(wrapper.find(TwitterIcon)).toHaveLength(1);
});