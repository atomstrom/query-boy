import Query from '../index';

describe('query class', () => {
  test('getQuery() with no params should return empty string', () => {
    const query = new Query();
    const querystring = query.getQuery();
    expect(querystring).toBe('');
  });

  test('getQuery() should return param string', () => {
    const query = new Query('/path');
    const querystring = query.getQuery();
    expect(querystring).toBe('/path');
  });

  test('addParam() should add query params', () => {
    const query1 = new Query('/path');
    query1.addParam('name', 'jane');
    const querystring1 = query1.getQuery();
    expect(querystring1).toBe('/path?name=jane');

    const query2 = new Query('');
    query2.addParam('colour', 'green');
    const querystring2 = query2.getQuery();
    expect(querystring2).toBe('?colour=green');
  });

  test('addParam() should chain params', () => {
    const query = new Query('/path');
    query.addParam('name', 'jane');
    query.addParam('colour', 'green');
    const querystring = query.getQuery();
    expect(querystring).toBe('/path?name=jane&colour=green');
  });

  test('removeParam() should remove params', () => {
    const query = new Query('/path');
    query.addParam('name', 'jane');
    query.addParam('colour', 'green');
    let querystring = query.getQuery();
    expect(querystring).toBe('/path?name=jane&colour=green');
    query.removeParam('name');
    querystring = query.getQuery();
    expect(querystring).toBe('/path?colour=green');
  });

  test('getValue() should return value', () => {
    const query = new Query('/path');
    query.addParam('name', 'jane');
    let querystring = query.getValue('name');
    expect(querystring).toBe('jane');
  });

  test('clear() should clear the query string params', () => {
    const query = new Query('/path');
    query.addParam('name', 'jane');
    query.addParam('colour', 'green');
    const querystring = query.getQuery();
    expect(querystring).toBe('/path?name=jane&colour=green');
    query.clear();
    expect(query.getQuery()).toBe('/path');
  });
});
