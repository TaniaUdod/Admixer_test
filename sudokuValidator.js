function validSolution(board) {
    // Перевірка, чи в кожному рядку є число від 1 до 9 і відсутній 0
    for (let row = 0; row < 9; row++) {
        let rowSet = new Set(board[row]);

        if (rowSet.size !== 9 || rowSet.has(0)) {
            return false;
        }
    }

    // Перевірка, чи в кожному стовпці є число від 1 до 9 і відсутній 0
    for (let col = 0; col < 9; col++) {
        let colSet = new Set();

        for (let row = 0; row < 9; row++) {
            colSet.add(board[row][col]);
        }

        if (colSet.size !== 9 || colSet.has(0)) {
            return false;
        }
    }

    // Перевірка, чи в кожному блоці 3x3 є число від 1 до 9 і відсутній 0
    for (let blockRow = 0; blockRow < 3; blockRow++) {
        for (let blockCol = 0; blockCol < 3; blockCol++) {
            let blockSet = new Set();

            for (let row = blockRow * 3; row < (blockRow + 1) * 3; row++) {
                for (let col = blockCol * 3; col < (blockCol + 1) * 3; col++) {
                    blockSet.add(board[row][col]);
                }
            }

            if (blockSet.size !== 9 || blockSet.has(0)) {
                return false;
            }
        }
    }

    return true;
}

// Перевірка:
console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
])); // true

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
])); // false
