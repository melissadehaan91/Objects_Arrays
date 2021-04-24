let person = {
    name: 'Melissa',
    age: 29,
    evaluations: [7, 9, 10]
}

//1 console.log(person);

//2 person.name = 'Melissa';
// person['name'] = 'Mel'
// console.log(person.name);

//3 person.age = 30;
// person['age'] = 30;
// console.log(person.age);

// console.log(person.evaluations)
// ------------------------------------------------

let selectedColors = ['rood', 'groen', 'blauw'];
// console.log(selectedColors);
// console.log(selectedColors.length);
// console.log(selectedColors [0]);
// console.log(selectedColors [selectedColors.length - 1]);
selectedColors.push('geel');
// console.log(selectedColors [selectedColors.length - 1]);
// console.log(selectedColors);
selectedColors.push(1);
// console.log(selectedColors);
selectedColors.push({greeting: 'Hi ik ben een object'});
// console.log(selectedColors);
console.log(selectedColors [selectedColors.length - 1]);


