import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import App from './components/App';
import LoginApp from './containers/LoginApp';
import HomeApp from './containers/HomeApp';
import MenuApp from './containers/MenuApp';
import PasswordListApp from './containers/PasswordListApp';

describe("<App />", () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });
})

describe("<LoginApp />", () => {
  const wrapper = shallow(<LoginApp />);
  test('hope renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoginApp />, div);
  });
  test('hope form login have a submit button', () => {
    expect(wrapper.find(<button/>)).toBeTrue;
  });
  test('hope form login have 2 input: username and password', () => {
    expect(wrapper.find('[htmlFor="text"]')).toBeTrue
    expect(wrapper.find('[htmlFor="password"]')).toBeTrue
  });
})
