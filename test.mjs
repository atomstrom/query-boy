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
console.log('remove', testQuery.getQuery())
