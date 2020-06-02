class Token {
    constructor() {
        this.owner = owner; //reference to the player object that owns the token
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }
}