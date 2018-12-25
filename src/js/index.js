import '../scss/top.scss';
import { square } from './modules/library';
import _ from 'lodash';

const test = document.getElementById('test');
console.log(_.eq(1, 2));

test.innerHTML = `<b>TOP</b> : ${square(10)}`;
