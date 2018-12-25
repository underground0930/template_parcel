import '../scss/top.scss';
import getUa from './modules/getUa';

const test = document.getElementById('test');

test.innerHTML = `<b>TOP</b> : ${getUa()}`;
