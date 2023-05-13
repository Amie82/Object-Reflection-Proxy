import Force from './Force';

export default class Magician extends Force {
  constructor(name) {
    super(name);
    this.type = 'Majician';
    this.attack = 10;
  }
}