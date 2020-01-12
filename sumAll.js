const sumAll = function(first,second) {
  if (first<0 || second<0 || typeof(first)!=="number" || typeof(second)!=="number") {
    return "ERROR";
  }else if (first>second) {
    return bigNumberFirst(first,second);
  }else if (first<second) {
    return littleNumberFirst(first,second)
  }

  function littleNumberFirst(start,end){
    let result = 0;
    for (; start <= end; start++) {
      result += start
    }
    return result;
  }

  function bigNumberFirst(start,end){
    let result = 0;
    for (; start >= end; start--) {
      result += start
    }
    return result;
  }


}

module.exports = sumAll
