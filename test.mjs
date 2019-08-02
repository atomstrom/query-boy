import Query from './index';

const testQuery = new Query('/includes');
console.log('init', testQuery.getQuery());

testQuery.addParam('name', 'jane');
console.log('add', testQuery.getQuery());

// duplicate key
/*
testQuery.addParam('name', 'frank');
console.log('add', testQuery.getQuery());
*/

testQuery.addParam('face', 'happy');
console.log('add', testQuery.getQuery());

testQuery.removeParam('name');
console.log('remove', testQuery.getQuery());

testQuery.addParam('taste', 'good');
console.log('add', testQuery.getQuery());

testQuery.addParam('amount', 4);
console.log('add', testQuery.getQuery());

testQuery.addParam('size', 'medium', 1);
console.log('add at 1', testQuery.getQuery());

console.log('value size:', testQuery.getValue('size'));

testQuery.clear();
console.log('clear', testQuery.getQuery());

