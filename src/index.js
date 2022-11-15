import './style.css';
import Event from './eventClass.js';
import List from './listClass.js';
import Storage from './storageHandler.js';

let eventTest = new Event('title','descrip','11/12/22', 'HIGH', false);
let eventTest2 = new Event('title2', 'descrip2', '11/13/22', 'LOW', false);

const lists = [];

let listTest = new List('list test');
let listTest2 = new List('list test 2');
listTest.addEvent(eventTest);
listTest2.addEvent(eventTest2);

lists.push(listTest);
lists.push(listTest2);

const storage = new Storage();
storage.writeList(lists);
const result = storage.getList();

