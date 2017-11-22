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


console.log(generatePlayerBoard(4, 4));
/*const printBoard = board => {
  console.log('Current Board:');

  console.log(board[0].join(' | '));
  console.log(board[1].join(' | '));
  console.log(board[2].join(' | '));
};

printBoard();*/