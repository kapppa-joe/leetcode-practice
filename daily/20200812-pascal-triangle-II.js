/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1];

    const nextRow = (row) => {
        row.unshift(0);
        for (let i = 0; i < row.length - 1; i++) {
            row[i] += row[i + 1];
        }
    }

    for (let i = 0; i < rowIndex; i++) {
        nextRow(row);
    }
    return row;
};


