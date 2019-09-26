const board = {
    A1: {
        left: null,
        right: "B1",
        top: "A2",
        bottom: null,
        topLeft: null,
        topRight: "B2",
        bottomLeft: null,
        bottomRight: null
    },
    B1: {
        left: "A1",
        right: "C1",
        top: "B2",
        bottom: null,
        topLeft: "A2",
        topRight: "C2",
        bottomLeft: null,
        bottomRight: null
    },
    C1: {
        left: "B1",
        right: "D1",
        top: "C2",
        bottom: null,
        topLeft: "B2",
        topRight: "D2",
        bottomLeft: null,
        bottomRight: null
    },
    D1: {
        left: "C1",
        right: "E1",
        top: "D2",
        bottom: null,
        topLeft: "C2",
        topRight: "E2",
        bottomLeft: null,
        bottomRight: null
    },
    E1: {
        left: "D1",
        right: "F1",
        top: "E2",
        bottom: null,
        topLeft: "D2",
        topRight: "F2",
        bottomLeft: null,
        bottomRight: null
    },
    F1: {
        left: "E1",
        right: "G1",
        top: "F2",
        bottom: null,
        topLeft: "E2",
        topRight: "G2",
        bottomLeft: null,
        bottomRight: null
    },
    G1: {
        left: "F1",
        right: "H1",
        top: "G2",
        bottom: null,
        topLeft: "F2",
        topRight: "H2",
        bottomLeft: null,
        bottomRight: null
    },
    H1: {
        left: "G1",
        right: null,
        top: "H2",
        bottom: null,
        topLeft: "G2",
        topRight: null,
        bottomLeft: null,
        bottomRight: null
    },
    A2: {
        left: null,
        right: "B2",
        top: "A3",
        bottom: "A1",
        topLeft: null,
        topRight: "B3",
        bottomLeft: null,
        bottomRight: "B1"
    },
    B2: {
        left: "A2",
        right: "C2",
        top: "B3",
        bottom: "B1",
        topLeft: "A3",
        topRight: "C3",
        bottomLeft: "C1",
        bottomRight: "A1"
    },
    C2: {
        left: "B2",
        right: "D2",
        top: "C3",
        bottom: "C1",
        topLeft: "B3",
        topRight: "D3",
        bottomLeft: "B1",
        bottomRight: "D1"
    },
    D2: {
        left: "C2",
        right: "E2",
        top: "D3",
        bottom: "D1",
        topLeft: "E3",
        topRight: "C3",
        bottomLeft: "C1",
        bottomRight: "E1"
    },
    E2: {
        left: "D2",
        right: "F2",
        top: "E3",
        bottom: "E1",
        topLeft: "D3",
        topRight: "F3",
        bottomLeft: "D1",
        bottomRight: "F1"
    },
    F2: {
        left: "E2",
        right: "G2",
        top: "F3",
        bottom: "F1",
        topLeft: "E3",
        topRight: "G3",
        bottomLeft: "E1",
        bottomRight: "G1"
    },
    G2: {
        left: "F2",
        right: "H2",
        top: "G3",
        bottom: "G1",
        topLeft: "F3",
        topRight: "H3",
        bottomLeft: "F1",
        bottomRight: "H1"
    },
    H2: {
        left: "G2",
        right: null,
        top: "H3",
        bottom: "H1",
        topLeft: "G3",
        topRight: null,
        bottomLeft: "G1",
        bottomRight: null
    },
    /**/
    A3: {
        left: null,
        right: "B3",
        top: "A4",
        bottom: "A2",
        topLeft: null,
        topRight: "B4",
        bottomLeft: null,
        bottomRight: "B2"
    },
    B3: {
        left: "A3",
        right: "C3",
        top: "B4",
        bottom: "B3",
        topLeft: "A4",
        topRight: "C4",
        bottomLeft: "A2",
        bottomRight: "C2"
    },
    C3: {
        left: "B3",
        right: "D3",
        top: "C4",
        bottom: "C2",
        topLeft: "B4",
        topRight: "D4",
        bottomLeft: "B2",
        bottomRight: "D2"
    },
    D3: {
        left: "C3",
        right: "E3",
        top: "D4",
        bottom: "D2",
        topLeft: "E4",
        topRight: "C4",
        bottomLeft: "C2",
        bottomRight: "E2"
    },
    E3: {
        left: "D3",
        right: "F3",
        top: "E4",
        bottom: "E2",
        topLeft: "D4",
        topRight: "F4",
        bottomLeft: "D2",
        bottomRight: "F2"
    },
    F3: {
        left: "E3",
        right: "G3",
        top: "F4",
        bottom: "F2",
        topLeft: "E4",
        topRight: "G4",
        bottomLeft: "E2",
        bottomRight: "G2"
    },
    G3: {
        left: "F3",
        right: "H3",
        top: "G4",
        bottom: "G2",
        topLeft: "F4",
        topRight: "H4",
        bottomLeft: "F2",
        bottomRight: "H2"
    },
    H3: {
        left: "G3",
        right: null,
        top: "H4",
        bottom: "H2",
        topLeft: "G4",
        topRight: null,
        bottomLeft: "G2",
        bottomRight: null
    },
    /*4*/
    A4: {
        left: null,
        right: "B4",
        top: "A5",
        bottom: "A3",
        topLeft: null,
        topRight: "B5",
        bottomLeft: null,
        bottomRight: "B3"
    },
    B4: {
        left: "A4",
        right: "C4",
        top: "B5",
        bottom: "B3",
        topLeft: "A5",
        topRight: "C5",
        bottomLeft: "C3",
        bottomRight: "A3"
    },
    C4: {
        left: "B4",
        right: "D4",
        top: "C5",
        bottom: "C3",
        topLeft: "B5",
        topRight: "D5",
        bottomLeft: "B3",
        bottomRight: "D3"
    },
    D4: {
        left: "C4",
        right: "E4",
        top: "D5",
        bottom: "D3",
        topLeft: "E5",
        topRight: "C5",
        bottomLeft: "C3",
        bottomRight: "E3"
    },
    E4: {
        left: "D4",
        right: "F4",
        top: "E5",
        bottom: "E3",
        topLeft: "D5",
        topRight: "F5",
        bottomLeft: "D3",
        bottomRight: "F3"
    },
    F4: {
        left: "E4",
        right: "G4",
        top: "F5",
        bottom: "F3",
        topLeft: "E5",
        topRight: "G5",
        bottomLeft: "E3",
        bottomRight: "G3"
    },
    G4: {
        left: "F4",
        right: "H4",
        top: "G5",
        bottom: "G4",
        topLeft: "F5",
        topRight: "H5",
        bottomLeft: "F3",
        bottomRight: "H3"
    },
    H4: {
        left: "G4",
        right: null,
        top: "H5",
        bottom: "H3",
        topLeft: "G5",
        topRight: null,
        bottomLeft: "G4",
        bottomRight: null
    },
    A5: {
        left: null,
        right: "B5",
        top: "A6",
        bottom: "A4",
        topLeft: null,
        topRight: "B6",
        bottomLeft: null,
        bottomRight: "B4"
    },
    B5: {
        left: "A5",
        right: "C5",
        top: "B6",
        bottom: "B4",
        topLeft: "A6",
        topRight: "C6",
        bottomLeft: "A4",
        bottomRight: "C4"
    },
    C5: {
        left: "B5",
        right: "D5",
        top: "C6",
        bottom: "C4",
        topLeft: "B6",
        topRight: "D6",
        bottomLeft: "B4",
        bottomRight: "D4"
    },
    D5: {
        left: "C5",
        right: "E5",
        top: "D6",
        bottom: "D4",
        topLeft: "C6",
        topRight: "E6",
        bottomLeft: "C4",
        bottomRight: "E4"
    },
    E5: {
        left: "D5",
        right: "F5",
        top: "E6",
        bottom: "E4",
        topLeft: "D6",
        topRight: "F6",
        bottomLeft: "D4",
        bottomRight: "F4"
    },
    F5: {
        left: "E5",
        right: "G5",
        top: "F6",
        bottom: "F4",
        topLeft: "E6",
        topRight: "G6",
        bottomLeft: "E4",
        bottomRight: "G4"
    },
    G5: {
        left: "F5",
        right: "H5",
        top: "G6",
        bottom: "G4",
        topLeft: "F6",
        topRight: "H6",
        bottomLeft: "F4",
        bottomRight: "H4"
    },
    H5: {
        left: "G5",
        right: null,
        top: "H6",
        bottom: "H4",
        topLeft: "G6",
        topRight: null,
        bottomLeft: "G4",
        bottomRight: null
    },
    A6: {
        left: null,
        right: "B6",
        top: "A7",
        bottom: "A5",
        topLeft: null,
        topRight: "B7",
        bottomLeft: null,
        bottomRight: "B5"
    },
    B6: {
        left: "A6",
        right: "C6",
        top: "B7",
        bottom: "B5",
        topLeft: "A7",
        topRight: "C7",
        bottomLeft: "A5",
        bottomRight: "C5"
    },
    C6: {
        left: "B6",
        right: "D6",
        top: "C7",
        bottom: "C5",
        topLeft: "B7",
        topRight: "D7",
        bottomLeft: "B5",
        bottomRight: "D5"
    },
    D6: {
        left: "C6",
        right: "E6",
        top: "D7",
        bottom: "D5",
        topLeft: "C7",
        topRight: "E7",
        bottomLeft: "C5",
        bottomRight: "E5"
    },
    E6: {
        left: "D6",
        right: "F6",
        top: "E7",
        bottom: "E5",
        topLeft: "D7",
        topRight: "F7",
        bottomLeft: "D5",
        bottomRight: "F5"
    },
    F6: {
        left: "E6",
        right: "G6",
        top: "F7",
        bottom: "F5",
        topLeft: "E7",
        topRight: "G7",
        bottomLeft: "E5",
        bottomRight: "G5"
    },
    G6: {
        left: "F6",
        right: "H6",
        top: "G7",
        bottom: "G5",
        topLeft: "F7",
        topRight: "H7",
        bottomLeft: "F5",
        bottomRight: "H5"
    },
    H6: {
        left: "G6",
        right: null,
        top: "H7",
        bottom: "H5",
        topLeft: "G7",
        topRight: null,
        bottomLeft: "G5",
        bottomRight: null
    },
    A7: {
        left: null,
        right: "B7",
        top: "A8",
        bottom: "A6",
        topLeft: null,
        topRight: "B8",
        bottomLeft: null,
        bottomRight: "B6"
    },
    B7: {
        left: "A7",
        right: "C7",
        top: "B8",
        bottom: "B6",
        topLeft: "A8",
        topRight: "C8",
        bottomLeft: "A6",
        bottomRight: "C6"
    },
    C7: {
        left: "B7",
        right: "D7",
        top: "C8",
        bottom: "C6",
        topLeft: "B8",
        topRight: "D8",
        bottomLeft: "B6",
        bottomRight: "D6"
    },
    D7: {
        left: "C7",
        right: "E7",
        top: "D8",
        bottom: "D6",
        topLeft: "C8",
        topRight: "E8",
        bottomLeft: "C6",
        bottomRight: "E6"
    },
    E7: {
        left: "D7",
        right: "F7",
        top: "E8",
        bottom: "E6",
        topLeft: "D8",
        topRight: "F8",
        bottomLeft: "D6",
        bottomRight: "F6"
    },
    F7: {
        left: "E7",
        right: "G7",
        top: "F8",
        bottom: "F6",
        topLeft: "E8",
        topRight: "G8",
        bottomLeft: "E6",
        bottomRight: "G6"
    },
    G7: {
        left: "F7",
        right: "H7",
        top: "G8",
        bottom: "G6",
        topLeft: "F8",
        topRight: "H8",
        bottomLeft: "F6",
        bottomRight: "H6"
    },
    H7: {
        left: "G7",
        right: null,
        top: "H8",
        bottom: "H6",
        topLeft: "G8",
        topRight: null,
        bottomLeft: "G6",
        bottomRight: null
    },
    A8: {
        left: null,
        right: "B8",
        top: null,
        bottom: "A7",
        topLeft: null,
        topRight: null,
        bottomLeft: null,
        bottomRight: "B7"
    },
    B8: {
        left: "A8",
        right: "C8",
        top: null,
        bottom: "B7",
        topLeft: null,
        topRight: null,
        bottomLeft: "A7",
        bottomRight: "C7"
    },
    C8: {
        left: "B8",
        right: "D8",
        top: null,
        bottom: "C7",
        topLeft: null,
        topRight: null,
        bottomLeft: "B7",
        bottomRight: "D7"
    },
    D8: {
        left: "C8",
        right: "E8",
        top: null,
        bottom: "D7",
        topLeft: null,
        topRight: null,
        bottomLeft: "C7",
        bottomRight: "E7"
    },
    E8: {
        left: "D8",
        right: "F8",
        top: null,
        bottom: "E7",
        topLeft: null,
        topRight: null,
        bottomLeft: "D7",
        bottomRight: "F7"
    },
    F8: {
        left: "E8",
        right: "G8",
        top: null,
        bottom: "F7",
        topLeft: null,
        topRight: null,
        bottomLeft: "E7",
        bottomRight: "G7"
    },
    G8: {
        left: "F8",
        right: "H8",
        top: null,
        bottom: "G7",
        topLeft: null,
        topRight: null,
        bottomLeft: "F7",
        bottomRight: "H7"
    },
    H8: {
        left: "G8",
        right: null,
        top: null,
        bottom: "H7",
        topLeft: null,
        topRight: null,
        bottomLeft: "G7",
        bottomRight: null
    }
};

module.exports = board;
