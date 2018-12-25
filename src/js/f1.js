import '../scss/detail.scss';
import { getUa } from './modules/library';
import _ from 'lodash';

const test = document.getElementById('test');

test.innerHTML = `<b>DETAIL</b> : ${getUa()}`;
