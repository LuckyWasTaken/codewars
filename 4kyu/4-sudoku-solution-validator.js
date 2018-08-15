// https://www.codewars.com/kata/sudoku-solution-validator/

function validSolution(board) {
    let flag = true;

    // Check rows
    flag = board.every((row) => isValidSector(row));

    //Check columns
    function getCol(i) {
        return board.map((row) => row.filter((_, eli) => i === eli)[0]);
    }

    for (let i = 0; i < 9; i++) {
        if (!isValidSector(getCol(i))) {
            flag = false;
        }
    }

    //Check sectors
    //Nah I just want to sleep atm
    for (let offsetX = 0; offsetX < 3; offsetX++) {
        for (let offsetY = 0; offsetY < 3; offsetY++) {
            let sector = [];
            for (let x = 0; x < 3; x++) {
                for (let y = 0; y < 3; y++) {
                    sector.push(board[offsetX * 3 + x][offsetY * 3 + y])
                }
            }
            if (!isValidSector(sector)) {
                flag = false;
            }
        }
    }

    return flag;
}

function isValidSector(arr) {
    return [...arr].sort().join("") === "123456789";
}