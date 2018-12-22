import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';

const content = ['Tab 1 content', 'Tab 2 content', 'Tab 3 content'];

function Root() {
  return(
    <div>
      <Clock />
      <Tabs content={content} />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('page loaded!');
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
