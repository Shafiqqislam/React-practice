const students = [
    { id: 17, name: 'shafik' },
    { id: 18, name: 'tavir' },
    { id: 35, name: 'shaown' },
    { id: 40, name: 'rakib' },
];
const name = students.map(s => s.name);
console.log(name);

const id = students.map(s => s.id);
console.log(id);

const bigger = students.filter(s => s.id > 20);
console.log(bigger);

const biggerOne = students.find(s => s.id > 20);
console.log(biggerOne);