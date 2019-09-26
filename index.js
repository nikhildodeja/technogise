const colors = require('colors');
const board  = require("./ds");
const playerFactory = require('./playerFactory');
const { INVALIDCOMMAND } = require('./Exceptions');


try {
    const arguments = process.argv;
    if (arguments.length !== 3 ) {
        throw INVALIDCOMMAND;
    }
    let command = process.argv.slice(2)[0];
    command = command.split(" ");
    if (command.length !== 2) {
        throw INVALIDCOMMAND;
    }
    // commmand 0 is player and command[1] is position
    const player = new playerFactory(command[0], board, command[1]);
    player.move();
    player.print();
    // console.log(piece.places);
} catch (error) {
    console.log(error.red);
}

