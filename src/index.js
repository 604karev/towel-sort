// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    const reversedMatrix = matrix.map((item, index) => index % 2 === 0 ? item : item.reverse());
    return matrix.length > 0 ? reversedMatrix.reduce((prev, current) => prev.concat(current)) : []
};
