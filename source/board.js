import createCard from "./card.js";

// cria elementos board com todos os cards através dos dados recebidos e renderiza na tela
const createBoard = (boardList) => {
    
    // board
    let board = document.createElement("div");
    board.classList.add("board");
   
    // board title
    let boardTitle = document.createElement("p");
    boardTitle.classList.add("board-title");
    boardTitle.textContent = boardList.boardTitle;
    board.appendChild(boardTitle)
  
    // chama função para criar e retornar a lista de cards para ser inserida dentro do board
    let cardList = document.createElement("ul");
    boardList.cards.map((boardList) => {
        let card = createCard(boardList)
        cardList.appendChild(card)
    })
    board.appendChild(cardList);

    // botão para criar cards
    let btn = document.createElement("button");
    btn.classList.add("add-btn");
    btn.innerHTML = "+ Add"
    board.appendChild(btn);

    // cria o board com todos os elementos no workscape
    document.querySelector(".work-space").appendChild(board)

}

export default createBoard;
