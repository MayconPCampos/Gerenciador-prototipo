import createBoard from "./board.js"
import boardData from "./database.js"

// cria todos os boards no workspace
const updateWorkspace = () => {
    boardData.map((boardData) => createBoard(boardData))
}

export default updateWorkspace;