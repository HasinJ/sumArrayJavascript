const sumAll = function(start,end) {
  if (start<0 || end<0 || typeof(start)!=="number" || typeof(end)!=="number") {
    return "ERROR";
  }

  let result = 0;
  for (; start <= end; start++) {
    result += start
  }
  return result;

}

module.exports = sumAll
