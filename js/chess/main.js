$(function() {
    init()
    console.log("Main Init called")

    parse_fen(START_FEN)
    print_board()
});

function init_files_ranks_board() {
    var index = 0
    var file = FILES.FILE_A
    var rank = RANKS.RANK_1
    var sq = SQUARES.A1

    for (index = 0; index < BOARD_SQ_NUM; ++index) {
        files_board[index] = SQUARES.OFF_BOARD
        ranks_board[index] = SQUARES.OFF_BOARD
    }

    for (rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
        for(file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
            sq = FR2SQ(file, rank)
            files_board[sq] = file
            ranks_board[sq] = rank
        }
    }

    console.log("files_board[0]: " + files_board[0] + " ranks_board[0]: " + ranks_board[0])
    console.log("files_board[SQUARES.A1]: " + files_board[SQUARES.A1] + " ranks_board[SQUARES.A1]: " + ranks_board[SQUARES.A1])
    console.log("files_board[SQUARES.E8]: " + files_board[SQUARES.E8] + " ranks_board[SQUARES.E8]: " + ranks_board[SQUARES.E8])
}

function init_hash_keys() {
    var index = 0
    for (index = 0; index < 14 * 120; ++index) {
        piece_keys[index] = rand_32()
    }

    side_key = rand_32()

    for (index = 0; index < 16; ++index) {
        castle_keys[index] = rand_32()
    }
}

function init_sq_120_to_64() {
    var index = 0
    var file = FILES.FILE_A
    var rank = RANKS.RANK_1
    var sq = SQUARES.A1
    var sq_64 = 0

    for (index = 0; index < BOARD_SQ_NUM; ++index) {
        sq_120_to_sq_64[index] = 65
    }

    for (index = 0; index < 64; ++index) {
        sq_64_to_sq_120[index] = 120
    }

    for (rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
        for (file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
            sq = FR2SQ(file, rank)
            sq_64_to_sq_120[sq_64] = sq
            sq_120_to_sq_64[sq] = sq_64
            sq_64++
        }
    }
}

function init() {
    console.log("init() called")
    init_files_ranks_board()
    init_hash_keys()
}