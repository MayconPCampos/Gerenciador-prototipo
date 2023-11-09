// cria e retorna uma lista de elementos cards através da lista de objetos recebida
const createCard = (boardList) => {
        
    // card
    let card = document.createElement("li");
    card.classList.add("board-item");

    //cor de fundo do card
    card.style.backgroundColor = boardList.background

    // titulo do card
    let cardTitle = document.createElement("p");
    cardTitle.textContent = boardList.cardTitle
    cardTitle.classList.add("card-title")
    card.appendChild(cardTitle)

    return card;
}

export default createCard;