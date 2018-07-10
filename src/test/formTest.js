
import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Form from '../components/Form';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
let wrapper;

describe('Form Component', () => {
  beforeEach(()=>{
    wrapper = shallow(<Form />);
    console.log(wrapper);
  })
    
  it('should render without throwing an error', () => {
      expect(wrapper.find('form.listing').exists()).toBe(true)
    })
   })

   it('renders a text input', () => {
    expect(shallow(<Form />).find('#title').length).toEqual(1)
   })

   describe('Text input', () => {  
    it('should respond to change event and change the state of the Input Component', () => {
     
     wrapper.find('#title').simulate('change', {target: {name: 'title', value: 'React with Redux'}});
     
     const form = mount(<Form />);
     const input = form.find('#title').get(0);
     input.value = 'React with Redux';
    expect(shallow(<Form />).state('title')).toEqual('React with Redux');
    })
   })
   
  //  const configureStore = require('redux-mock-store');
  //  const store = mockStore({});
  //  const spy = jest.fn(); 
   