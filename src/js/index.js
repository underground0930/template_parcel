import '../scss/top.scss';
import { square } from './modules/library';
import _ from 'lodash';

const funcA = () => {
  console.log('funcA');
};
funcA();

const test = document.getElementById('test');
console.log(_.eq(1, 2));

test.innerHTML = `<b>TOP</b> : ${square(10)}`;

class Human {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }
  say() {
    const words = `My name is ${this.name}. I'm ${this.age} years old.`;
    console.log(words);
  }
}
const taro = new Human('taro', 12);
taro.say();

const [a, b] = [10, 12];
console.log(a, b);

const foo = { a: 1, b: 2 };
const bar = { ...foo, c: 3 };
console.log(bar);
