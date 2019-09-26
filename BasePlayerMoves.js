
class Player {
    constructor(board, position, places) {
        this.board = board;
        this.position = position;
        this.places = places;
        this.currentPosition = this.board[this.position];
    }

    print() {
        console.log(`"${this.places.join(",")}"`.america);
    }
}

class SingleMovePlayer extends Player {
    constructor(board, position, places, currentPosition) {
        super(board, position, places, currentPosition);
    }
    singleStepsMove(visits) {
        const place = this.currentPosition;
        for (let pos in visits) {
            if (place[visits[pos]] !== null) {
                this.places.push(place[visits[pos]]);
            }
        }
    }
}

class SideMovePlayer extends Player {
    constructor(board, position, places, currentPosition) {
        super(board, position, places, currentPosition);
    }
    moveToSides(pos1, pos2) {
        let sideOne = this.currentPosition;
        let sideTwo = this.currentPosition;
        while (sideOne[pos1] || sideTwo[pos2]) {
            if (sideOne[pos1]) {
                this.places.push(sideOne[pos1]);
                sideOne = this.board[sideOne[pos1]];
            }
            if (sideTwo[pos2]) {
                this.places.push(sideTwo[pos2]);
                sideTwo = this.board[sideTwo[pos2]];
            }
        }
    }
}

class HorseMovePlayer extends Player {
    constructor(board, position,places, currentPosition) {
        super(board, position, places, currentPosition);
    }

    moveTheHorse() {
        if (this.currentPosition.topLeft && this.board[this.currentPosition.topLeft].top) {
            this.places.push(this.board[this.currentPosition.topLeft].top);
        }

        if (this.currentPosition.topLeft) {
            this.places.push(this.board[this.currentPosition.topLeft].left);
        }

        if (this.currentPosition.topRight) {
            this.places.push(this.board[this.currentPosition.topRight].top);
        }

        if (this.currentPosition.topRight) {
            this.places.push(this.board[this.currentPosition.topRight].right);
        }

        if (this.currentPosition.bottomRight) {
            this.places.push(this.board[this.currentPosition.bottomRight].bottom);
        }

        if (this.currentPosition.bottomRight) {
            this.places.push(this.board[this.currentPosition.bottomRight].right);
        }


        if (this.currentPosition.bottomLeft) {
            this.places.push(this.board[this.currentPosition.bottomLeft].bottom);
        }

        if (this.currentPosition.bottomLeft) {
            this.places.push(this.board[this.currentPosition.bottomLeft].left);
        }
    }
}


module.exports = { SingleMovePlayer, SideMovePlayer, HorseMovePlayer };
