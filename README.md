# query-boy
[![Build Status](https://travis-ci.com/atomstrom/query-boy.svg?token=xR6iXFbQzQedPMsfrvar&branch=develop)](https://travis-ci.com/atomstrom/query-boy)

### Usage example
```
import Query from 'query-boy';
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
