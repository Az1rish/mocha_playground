function diff(a, b) {
    return a.filter(n => !b.includes(n));
  }
  
  module.exports = diff;