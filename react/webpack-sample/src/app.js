import {sum} from './math.js';
import './app.css';
import secomImg from './secom.jpg';
import heartImg from './heart.png';

window.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('#app');
    el.innerHTML = `
        <h1>1 + 2 = ${sum(1, 2)}</h1>
        <img src="${secomImg}" alt="새콤달콤" />
        <img src="${heartImg}" alt="하트" />
    `
});