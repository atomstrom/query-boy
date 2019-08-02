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
- addParam(identifier:String, value:String, position:Number)
- removeParam(identifier:String)
- clear()

### @todo
- check position and insert on specific value
- getParam by identifier
- export as npm module
- tests
