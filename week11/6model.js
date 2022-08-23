import {user} from './object.js';
const student = user('Peter parker',18);
student.printName();

const el = document.getElementById('target');
const html = `The student name is ${student.name}`;
el.innerHTML = html;