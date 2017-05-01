import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import expect from 'expect';
import {shallow} from 'enzyme';
import App from '../../components/App';
import HeaderApp from '../../containers/HeaderApp';

describe("App", () => {

  const props = {
    checkUserAuth: {}
  }
  it('Harusnya component app terender dengan baik & punya element BrowserRouter', () => {
    expect(
      shallow(
        <BrowserRouter/>
      ).length
    ).toEqual(1)
  });
  it('Harusnya component app punya element Header', () => {
    expect(
      shallow(
        <HeaderApp {...props}/>
      ).length
    ).toEqual(1)
  });
})
