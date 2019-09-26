const { King, Queen, Bishop, Rook, Horse, Pawn } = require('./Players');

const types = {King: King, Queen: Queen, Bishop: Bishop, Rook: Rook, Horse: Horse, Pawn: Pawn};

const { INVALIDVALUES } = require('./Exceptions');


function playerFactory(type, board, position) {
    // Check types and position of players exists
    (function(type, position, board) {
        if (!(type in types && position in board)) {
            throw INVALIDVALUES;
        }
    }(type, position, board));

    const player = new types[type](board, position, new Array());
    return player;
}

module.exports = playerFactory;
