// https://www.codewars.com/kata/object-extend/

var extend = function() {
    return Array(...arguments)
      .reduce((acc, val) => {
        return isObject(val)
        ? {
          ...val,
          ...acc
        }
        : acc;
      }, {})
  }