import CardGame from '../CardGame';

function CardFrontBack() {
    return /*html*/`
        <article>
            ${CardGame()}
            ${CardGame("JavaScript", "Logo do JavaScript")}
        </article>
    `;
}

export default CardFrontBack;