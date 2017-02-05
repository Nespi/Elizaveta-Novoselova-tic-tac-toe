class TicTacToe {
    constructor() {
        this.currentPlayerSymbol = "x";
        this.matrix = new Array(3, 3);

    }

    getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        // if(this.matrix[rowIndex][columnIndex]==null) {}
        this.matrix[rowIndex][columnIndex] = this.currentPlayerSymbol;
        if(this.currentPlayerSymbol = "x"){
            this.currentPlayerSymbol = "o";
        }else{
            this.currentPlayerSymbol = "x";
        }
    }

    isFinished() {

        // checks rows
        for(rowIndex=0; rowIndex<3; rowIndex++){
            for(colIndex=0; colIndex<3; colIndex++) {
                if(matrix[rowIndex][rowIndex] != 'x') {
                    break;
                } else {}

            }
        }
        // check cols
        // chech diag

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
    return rowIndex
    }
}

module.exports = TicTacToe;
