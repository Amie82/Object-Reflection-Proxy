export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        this.members.forEach((member) => {
            if (member === character) {
                throw new Error('Такой персонаж уже существует');
            }
        });

        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach((character) => {
            this.members.add(character);
        });
    }

    toArray() {
        return Array.from(this.members);
    }
}