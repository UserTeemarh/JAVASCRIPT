  // collection of values
// cant have duplicate
// similar to array
// It is iterable:


// sets are unique
// the values are irrelevant

// String is Iterable


const orderSet = new Set ([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza'
]);

console.log(orderSet);

console.log(new Set('Jonas'));

console.log(orderSet.size);

// METHODS OF SET

// TO CHECK CONTENT
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

// TO ADD NEW CONTENT
orderSet.add('Garlic Bread');
orderSet.delete('Pizza');
// orderSet.clear();

console.log(orderSet);

for (const order of orderSet) console.log(order);

const staff = ['Waiter', 'Chef', 'Manager', 'Chef', 'Waiter'];

console.log(staff);

const staffUnique = [...new Set(staff)];
console.log(staffUnique);

console.log(new Set(['Waiter', 'Chef', 'Manager', 'Chef', 'Waiter']).size);

console.log(new Set('Fatimahsulaimon').size);

