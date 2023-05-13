import Force from './Force';

export default class Daemon extends Force {
    constructor(name) {
        super(name);
        this.type = 'Daemon';
        this.attack = 10;
    }
}