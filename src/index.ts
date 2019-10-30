import './style.css';

const prepName = (firstname: string, lastname?: string): string => {
  return lastname ? 'Hello ' + firstname + ' ' + lastname + '.' : 'Hello ' + firstname + '.';
};

const name1 = prepName('Julien');
const name2 = prepName('Julien', 'Verneaut');

console.log(name1);
console.log(name2);
