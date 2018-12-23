import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import Autocomplete from './autocomplete';

const tabs = [
  {
    title: 'Tab 1',
    content: 'Hooray'
  },
  {
    title: 'Tab 2',
    content: 'for'
  },
  {
    title: 'Tab 3',
    content: 'React!'
  },
];

const names = ['Andre', 'Claire', 'James', 'Kevin', 'Kyle', 'Klay', 'Stephen'];

function Root() {
  return(
    <div>
      <Clock />
      <Tabs tabs={tabs} />
      <div>
        <Weather />
        <Autocomplete names={names} />
      </div>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('page loaded!');
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
