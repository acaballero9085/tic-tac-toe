export function checkForWin(board, moveCount, letter, x, y){

    // Check for row win
    if(board[0][y] === letter &&  board[1][y] === letter && board[2][y] === letter){
        return true
    }

    // Check for column win
    if(board[x][0] === letter && board[x][1] === letter && board[x][2] === letter){
        return true
    }

    // Check for diagonal win
    if(board[0][0] === letter && board[1][1] === letter && board[2][2] === letter){
        return true
    }

    // Check for anti-diagonal win
    if(board[2][0] === letter && board[1][1] === letter && board[0][2] === letter){
        return true
    }

    return false
}