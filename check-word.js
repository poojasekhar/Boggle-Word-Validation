function checkWord(board, word) {
    const rows = board.length;
    const cols = board[0].length;

    function dfs(x, y, word, visited) {
        if (!word.length) {
            return true;
        }
        if (x < 0 || x >= rows || y < 0 || y >= cols || board[x][y] !== word[0] || visited[x][y]) {
            return false;
        }

        visited[x][y] = true;

        const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]];
        for (const [dx, dy] of dirs) {
            if (dfs(x + dx, y + dy, word.slice(1), JSON.parse(JSON.stringify(visited)))) {  // Deep copy
                return true;
            }
        }

        visited[x][y] = false;
        return false;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === word[0] && dfs(i, j, word, Array.from({length: rows}, () => Array(cols).fill(false)))) {
                return true;
            }
        }
    }
    return false;
}


