import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


document.addEventListener("DOMContentLoaded",function(e){
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        var body = document.querySelector('body');
        if(body.className==='dark'){
            body.className='';
        }else{
            body.className='dark';
        }
    }
  });
})
