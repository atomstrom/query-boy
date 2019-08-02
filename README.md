# query-builder

## Usage
```
const query = new Query();
const query = new Query('/include');

console.log(query.getQuery())
-> '/include?length=3'

query.addParam('name', 'jane');

console.log(query.getQuery());
-> '?length=3&name=jane'

```

### @todo
- check position and insert on specific value
- check if identifier already exists -> don't add
- getParam by identifier
- remove param

### done
- get query
- add param for single identifier/value pair 
- export as npm module
- tests
