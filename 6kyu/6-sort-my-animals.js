// http://www.codewars.com/kata/sort-my-animals

const sortFn = (left, right) =>  left.numberOfLegs !== right.numberOfLegs
    ?  left.numberOfLegs - right.numberOfLegs
    :  left.name.localeCompare(right.name);


const sortAnimal = (animal) => animal === null
    ? null
    : animal.sort(sortFn);