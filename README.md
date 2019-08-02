# query-builder

### Usage example
```
const test = new Query();
const query = new Query('/include');

query.addParam('length', '3');
query.addParam('name', 'jane');
query.getQuery();
-> '/include?length=3&name=jane'

query.removeParam('name');
query.getQuery();
-> '/include?length=3'
```

### Methods
- getQuery()
- addParam(identifier, value, position) // position optional
- removeParam(identifier)
- getValue(identifier)
- clear()

### @todo
- export as npm module
- tests
