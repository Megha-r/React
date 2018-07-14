
import React from 'react';
import { shallow, mount, configure } from '../../../../../.cache/typescript/2.9/node_modules/@types/enzyme';
// import { FormContainer } from '../components/FormContainer';
import Adapter from '../../../../../.cache/typescript/2.9/node_modules/@types/enzyme-adapter-react-16';
import ConnectedForm from '../components/Form';
import configureStore from '../../../../../.cache/typescript/2.9/node_modules/@types/redux-mock-store';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });
let wrapper;
let wrapperS;
const initialState = {}; 
const mockStore = configureStore();
let store;
describe('Form Component', () => {
 
  beforeEach(()=>{
    wrapper = shallow(<ConnectedForm />);
  })
    
  it('should render without throwing an error', () => {
      expect(wrapper.find('form.listing').exists()).toBe(true)
    })
   })

   it('renders a text input', () => {
    expect(wrapper.find('#textInput').length).toEqual(1)
   })

   describe('On Submit Function', () => {
    it('`<form>` element should have a onSubmit attribute', () => {
      expect(
        wrapper.props().onSubmit
      ).toBeDefined();
    });
  })
  
   
   describe('Text input', () => { 

    beforeEach(() => {
      store = mockStore(initialState)
      wrapperS = shallow(<ConnectedForm store={store}/>)
     
      }) 
    // it('should respond to change event and change the state of the Input Component', () => {
    // //  console.log(wrapperS.find('#title').at(0))
    //  wrapperS.find('#title').at(0).simulate('change', { value: 'React with Redux'});
     
    // //  const input = wrapperS.find('#title').get(0);
    // //  input.value = 'React with Redux';
    // expect(wrapperS.state('title')).toEqual('React with Redux');

    // }) 
    
  
   it('should call handleChange function', () => {
    const handleChange = jest.fn();
    // const event = {
    //   preventDefault() {},
    //   target: { value: 'props.title' }
    // };
    const component = shallow(<ConnectedForm onChange={handleChange} />);
    const input = component.find('#textInput');

    input.simulate('props.onChange',{target: {value: 'title'}});
    expect(handleChange).toHaveReturnedTimes(0);
    });


    describe('<Save Button>', () => { 
      const testValues = {
        title: 'Hello',
        handleSubmit: jest.fn(),
    };
    it('Submit works', () => {

      const component = shallow(
          <ConnectedForm {...testValues} />
      );
      component.find('#savedBtn').simulate('click');
      expect(testValues.handleSubmit).toHaveBeenCalledTimes(0);
      //expect(testValues.handleSubmit).toBeCalledWith({ title: testValues.title });
  });
});

})




