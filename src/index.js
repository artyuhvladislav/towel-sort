
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === undefined || matrix.length === 0 ) {
        return []
    }
    return matrix.map((el,i) => (i % 2 !== 0) ? el.reverse() : el).flat()
}
