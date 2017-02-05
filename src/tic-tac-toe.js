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

            console.log(this.matrix[rowIndex][colIndex]);

            if (this.currentPlayerSymbol == "x") {
                console.log("2o");
                this.currentPlayerSymbol = "o";
            } else {
                console.log("2x");
                this.currentPlayerSymbol = "x";
            }
            this.isFinished();
        }
    }

    isFinished() {
        // checks rows
        for(var rowIndex=0; rowIndex<3; rowIndex++){
            if (this.matrix[rowIndex][0] == this.matrix[rowIndex][1]  == this.matrix[rowIndex][2]){
                this.winnerSymbol = this.matrix[rowIndex][0];
                return true;
            }
        }
        // check cols
        for(var colIndex=0; colIndex<3; colIndex++){
            if (this.matrix[0][colIndex] == this.matrix[1][colIndex] == this.matrix[2][colIndex]){
                this.winnerSymbol = this.matrix[0][colIndex];
                return true;
            }
        }
        // check diags
        if ((this.matrix[0][0] == this.matrix[1][1] == this.matrix[2][2])||(this.matrix[0][2] == this.matrix[1][1] == this.matrix[2][0])){
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
