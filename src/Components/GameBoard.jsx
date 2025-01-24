import React, { useState, useEffect } from 'react';
import Tile from './Tile';
import './GameBoard.css'

const GameBoard = () => {
    // 创建一个4x4的空网格
    const [board, setBoard] = useState(createEmptyBoard());

    // 游戏初始化：随机生成两个 2
    useEffect(() => {
        addRandomTile(board);
        addRandomTile(board);
    }, []);

    // 创建一个空的 4x4 网格
    function createEmptyBoard() {
        return Array(4).fill().map(() => Array(4).fill(0));
    }

    // 随机填充一个 2 或 4 到网格
    function addRandomTile(board) {
        const emptyCells = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (board[i][j] === 0) emptyCells.push([i, j]);
            }
        }
        if (emptyCells.length > 0) {
            const [x, y] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            board[x][y] = Math.random() > 0.1 ? 2 : 4;
            setBoard([...board]);
        }
    }

    return (
        <div className="game-board">
            {board.map((row, x) =>
                row.map((value, y) => <Tile key={`${x}-${y}`} value={value} x={x} y={y} />)
            )}
        </div>
    );
};

export default GameBoard;