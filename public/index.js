import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/containers/App'
import 'tachyons';


ReactDOM.render(<App />, document.getElementById('root'));

if('serviceWorker' in Navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then((reg) => {
                console.log('REgistrado', reg);
            })
            .catch((err)=>{
                console.log('Erro', err);
            });
    });
}