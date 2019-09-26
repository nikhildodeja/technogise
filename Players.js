const { SingleMovePlayer, SideMovePlayer, HorseMovePlayer } = require('./BasePlayerMoves')

class King extends SingleMovePlayer {
    constructor(board, position, places) {
        super(board, position, places);
        this.visits = ['left', 'right', 'top', 'bottom', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    }
    move() {
        this.singleStepsMove(this.visits);
    }
}

class Queen extends SideMovePlayer {
    constructor(board, position, places) {
        super(board, position, places);
    }
    move() {
        this.moveToSides('topLeft', 'bottomRight');
        this.moveToSides('topRight', 'bottomLeft');
        this.moveToSides('top', 'bottom');
        this.moveToSides('left', 'right');
    }
}

class Bishop extends SideMovePlayer {
    constructor(board, position, places) {
        super(board, position, places);
    }
    move() {
        this.moveToSides('topLeft', 'bottomRight');
        this.moveToSides('topRight', 'bottomLeft');
    }
}

class Horse extends HorseMovePlayer {
    constructor(board, position, places) {
        super(board, position, places);
    }
    move() {
        this.moveTheHorse();
    }
}

class Rook extends SideMovePlayer {
    constructor(board, position, places) {
        super(board, position, places);
    }
    move() {
        this.moveToSides('top', 'bottom');
        this.moveToSides('left', 'right');
    }
}

class Pawn extends SingleMovePlayer {
    constructor(board, position, places) {
        super(board, position, places);
        this.visits = ["bottomLeft", "bottomRight"];
    }
    move() {
        this.singleStepsMove(this.visits);
    }
}

module.exports = { King, Queen, Bishop, Rook, Horse, Pawn };
