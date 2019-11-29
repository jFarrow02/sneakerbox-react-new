import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});
const noProps = shallow(<App/>);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should match a snapshot', ()=>{
  const tree = renderer.create(<App/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render when passed no props', ()=>{
  expect(noProps.exists()).toEqual(true);
});
