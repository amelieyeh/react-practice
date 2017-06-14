import React from 'react';
import { render } from 'react-dom';  //(ES6) just use render() method
import { BrowserRouter, Match, Miss } from 'react-router';

import './css/style.css'; // let webpack pack it up too. (compiled css)

import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

//const repo = `/${window.location.pathname.split('/')[1]}`; // only works for github page
const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root/>, document.querySelector('#main'));

