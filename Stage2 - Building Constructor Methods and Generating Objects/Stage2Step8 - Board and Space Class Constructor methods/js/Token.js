class Token {
    constructor(index, owner) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
        this.columnLocation = 0;
    }
    get htmlToken() {
        return document.getElementById(this.id);
    }
    /**
     * Gets left offset of html element.
     * @return {number} Left offset of token object's htmlToken.
     */
    get offsetLeft() {
        return this.htmlToken.offsetLeft;
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
    /**
     * Moves html token one column to the left.
     */
    moveLeft() {
        if (this.columnLocation > 0) {
            this.htmlToken.style.left = this.offsetLeft - 76;
            this.columnLocation -= 1;
        }
    }
    /**
     * Moves html token one column to right.
     */
    moveRight(columns) {
        if (this.columnLocation < columns - 1) {
            this.htmlToken.style.left = this.offsetLeft + 76;
            this.columnLocation += 1;
        }
    }
    /**
     * Drops html token into targeted board space.
     * @param {Object}  target - Targeted space for dropped token.
     * @param {function} reset - The reset function to call after the drop animation has completed.
     */
    drop(target, reset) {
        this.dropped = true;

        $(this.htmlToken).animate({
            top: (target.y * target.diameter)
        }, 750, 'easeOutBounce', reset);
    }
}