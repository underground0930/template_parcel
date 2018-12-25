import '../scss/detail.scss';
import getUa from './modules/getUa';

const test = document.getElementById('test');

test.innerHTML = `<b>DETAIL</b> : ${getUa()}`;
