import createBoard from "./board.js"
import boardData from "./database.js"

// cria todos os boards no workspace
boardData.map((boardData) => createBoard(boardData))


