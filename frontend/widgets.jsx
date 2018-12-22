import React from 'react';
import ReactDOM from 'react-dom';

function Root() {
  return(
    <div>
    </div>
  );
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('page loaded!');
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
