import './style.css';
import Event from './eventClass.js';
import List from './listClass.js';

let eventTest = new Event('title','descrip','11/12/22', 'HIGH');
let eventTest2 = new Event('title2', 'descrip2', '11/13/22', 'LOW');

let listTest = new List('list test');
listTest.addEvent(eventTest);
listTest.addEvent(eventTest2);

listTest.printMe();