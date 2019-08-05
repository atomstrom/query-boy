class Query {
  constructor(preString = '') {
    this.prestring = preString;
    this.query = [];
  }

  /**
   * return the parsed query string
   * @returns {string}
   */
  getQuery() {
    if (this.query.length === 0 || !this.query[0].identifier || !this.query[0].value ) return '';

    const firstParam = this.query[0];
    let querystring = `?${firstParam.identifier}=${firstParam.value}`;

    this.query.forEach((item, index)=> {
      if (index != 0) {
        querystring += `&${item.identifier}=${item.value}`;
      }
    });

    return `${this.prestring}${querystring}`;
  }

  /**
   * add new params to query
   * @param identifier
   * @param value
   */
  addParam(identifier = '', value = '', position = null) {
    const paramObject = { identifier, value };
    if (paramObject.identifier && paramObject.value) {
      const alreadyExists = this.query.find(item => item.identifier === paramObject.identifier);
      if (!alreadyExists) {
        if (position !== null && position <= this.query.length) {
          this.query.splice(position, 0, paramObject);
        } else {
          this.query.push(paramObject)
        }
      } else {
        throw new Error('duplicate identifier detected');
      }
    } else {
      throw new Error('no valid params object found');
    }
  }

  /**
   * query reset
   */
  clear() {
    return this.query = [];
  }

  /**
   * remove params object by identifier
   * @param identifier
   * @returns {*[]}
   */
  removeParam(identifier = '') {
    let matchIndex = null;
    this.query.forEach((item, index) => {
      if (item.identifier === identifier) {
        return matchIndex = index;
      }
    });
    if (matchIndex !== null) {
      return this.query.splice(matchIndex, 1);
    }
  }

  /**
   * get value by identifier
   * @param identifier
   * @returns {*}
   */
  getValue(identifier = '') {
    if (!identifier) return;
    const match = this.query.find(item => item.identifier === identifier);
    if (match && match.value) {
      return match.value;
    } else {
      throw new Error('identifier not found');
    }
  }
}

export default Query;
