class TicTacToe {

    constructor() {
        this.currentPlayerSymbol = 'x';
        this.winnerSymbol = null;
        this.matrix = [[null,null,null],[null,null,null],[null,null,null]];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, colIndex) {

        if(this.matrix[rowIndex][colIndex] == null) {
            this.matrix[rowIndex][colIndex] = this.currentPlayerSymbol;

            if (this.currentPlayerSymbol == "x") {
                this.currentPlayerSymbol = "o";
            } else {
                this.currentPlayerSymbol = "x";
            }
            this.isFinished();
        }
    }

    isFinished() {
        // checks win rows
        for(var rowIndex=0; rowIndex<3; rowIndex++){
            if (this.matrix[rowIndex][0] == this.matrix[rowIndex][1]
                && this.matrix[rowIndex][0] == this.matrix[rowIndex][2]
                    && this.matrix[rowIndex][0] != null){
                this.winnerSymbol = this.matrix[rowIndex][0];
                return true;
            }
        }
        // check win cols
        for(var colIndex=0; colIndex<3; colIndex++){
            if (this.matrix[0][colIndex] == this.matrix[1][colIndex]
                && this.matrix[0][colIndex] == this.matrix[2][colIndex]
                    && this.matrix[0][colIndex] != null){
                this.winnerSymbol = this.matrix[0][colIndex];
                return true;
            }
        }
        // check win diags
        if ((this.matrix[0][0] == this.matrix[1][1]
            && this.matrix[0][0] == this.matrix[2][2]
                && this.matrix[0][0] != null)
            ||(this.matrix[0][2] == this.matrix[1][1]
                && this.matrix[0][2] == this.matrix[2][0]
                    && this.matrix[0][2] != null)){
                this.winnerSymbol = this.matrix[1][1];
                return true;
        }
        return false;
    }

    getWinner() {
        return this.winnerSymbol;
    }

    noMoreTurns() {
        for(var rowIndex=0; rowIndex<3; rowIndex++){
            for(var colIndex=0; colIndex<3; colIndex++){
                if (this.matrix[rowIndex][colIndex] == null){
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if(this.noMoreTurns() && this.getWinner() == null) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
