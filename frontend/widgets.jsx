import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

const content = ['Tab 1 content', 'Tab 2 content', 'Tab 3 content'];
const names = ['Andre', 'Claire', 'James', 'Kevin', 'Kyle', 'Klay', 'Stephen'];

function Root() {
  return(
    <div>
      <Clock />
      <Tabs content={content} />
      <Weather />
      <Autocomplete names={names} />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('page loaded!');
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
