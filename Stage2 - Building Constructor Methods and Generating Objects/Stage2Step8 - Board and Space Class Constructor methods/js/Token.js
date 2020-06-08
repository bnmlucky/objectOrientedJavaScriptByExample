class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }
    /**
     * Draws new HTML token
     */
    drawHTMLToken() {
        const token = document.createElement('div');
        // append this element to the existing HTML element with the id of game-board-underlay
        document.getElementById('game-board-underlay').appendChild(token);
        // setAttribute() - add an id attribute to the newly created element with a value equal to the Token object's id property.
        token.setAttribute('id', this.id);
        // setAttribute() - add a class attribute to the newly created element, with a value equal to the word token.
        token.setAttribute('class', 'token');
        // set the background color of the token element equal to the Token object's owner's color property.
        token.style.backgroundColor = this.owner.color;
    }
}