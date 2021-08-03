
// You should implement your task here.

module.exports = function towelSort(matrix) {
	if (matrix == undefined) {
        return [];
	} else {
		matrix.forEach((element, index) => {
			if (index % 2 !== 0) {
                element.reverse();
			}
		});
        return matrix.flat();
	}
}


