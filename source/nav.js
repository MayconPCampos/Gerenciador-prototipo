import boardData from "./database.js";

// renderiza os titulos de boards no menu lateral com os dados vindo da base de dados
const createNavList = () => {
    let navList = document.createElement("ul");
    boardData.map((boardData) => {
        
        // cria os itens da lista
        let navItem = document.createElement("li");
        navItem.classList.add("board-nav-item");
        navItem.textContent = boardData.boardTitle;
       
        //adiciona os items dentro da lista não ordenada criada
        navList.appendChild(navItem)
    })

    // renderiza a lista de elementos do menu na tela
    document.querySelector(".nav-left").appendChild(navList);
}

export default createNavList;