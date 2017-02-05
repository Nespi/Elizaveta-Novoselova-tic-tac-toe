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
        // checks draw status
        for(rowIndex=0; rowIndex<3; rowIndex++){
            for(colIndex=0; colIndex,3 colIndex++){
                if (!=null){
                    return true;
                }
            }
        }

        // checks rows
        for(rowIndex=0; rowIndex<3; rowIndex++){
            if (matrix[rowIndex][0] == matrix[rowIndex][1]  == matrix[rowIndex][2]){
                return true;
            }
        }

        // check cols
        for(colIndex=0; colIndex<3; colIndex++){
            if (matrix[0][colIndex] == matrix[1][colIndex] == matrix[2][colIndex]){
                return true;
            }
        }
        // chech diag
        if ((matrix[0][0] == matrix[1][1] == matrix[2][2]) || (matrix[0][2] == matrix[1][1] == matrix[2][0])){
           return true;
        }

        return false;
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
