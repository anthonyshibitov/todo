import './style.css';
import Event from './eventClass.js';
import List from './listClass.js';

let eventTest = new Event('title','descrip','11/12/22', 'HIGH');
let eventTest2 = new Event('title2', 'descrip2', '11/13/22', 'LOW');

let listTest = new List('list test');
let listTest2 = new List('list test 2');
listTest.addEvent(eventTest);

console.log('event tets parent, shuold be 0', eventTest.getParent());

listTest.printMe();


listTest2.addEvent(eventTest2);
listTest2.printMe();

console.log('event tets 2 parent, shuold be 1', eventTest2.getParent());