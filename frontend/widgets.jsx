import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';

function Root() {
  return(
    <div>
      <Clock />
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('page loaded!');
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
