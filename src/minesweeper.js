const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    let board = [];
    for (rowIndex = 0; rowIndex < numberOfRows; rowIndex++){
        let row = [];
        for (columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
            row.push(' ');
        };
        board.push(row);
    };
    return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    for (rowIndex = 0; rowIndex < numberOfRows; rowIndex++){
        let row = [];
        for (columnIndex = 0; columnIndex < numberOfColumns; columnIndex++){
            row.push(null);
        };
        board.push(row);
    };
    let numberOfBombsPlaced = 0
    while (numberOfBombsPlaced < numberOfBombs){
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      board[randomRowIndex][randomColumnIndex] = 'B';
      numberOfBombsPlaced++;
      //Note: may place bombs on top of existing bombs
    };
    return board;
};

const printBoard = board => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};

let playerBoard = generatePlayerBoard(3,3);
let bombBoard = generateBombBoard(3, 3, 5);

console.log('PlayerBoard: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
