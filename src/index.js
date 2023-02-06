
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let newArr = []
  for(let i = 0; i < matrix.length; i++) {
    if(i % 2 === 0) {
      matrix[i]
    } else {
      matrix[i].reverse()
    }
    for(let j = 0; j < matrix[i].length; j++) {
      newArr.push(matrix[i][j])
    }
  }
  return newArr
}
