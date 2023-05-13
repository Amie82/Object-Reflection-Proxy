import Character from './Character';

export default class Force extends Character {
    constructor(name, type, attack, defence, stoned, distance) {
        super(name, type, attack, defence);
        this.attack = attack;
        this.stoned = stoned;
        this.distance = distance;
      }

      get stoned() {
        return this.isStoned;
      }

      set stoned(value) {
        this.isStoned = value;
      }

      get attack() {
        let attack = this.isAttack - (this.isAttack / 10) * (this.distance - 1);
        if (this.isStoned) {
          attack -= Math.log2(this.distance) * 5;
        }
        if (attack < 0) {
          return 0;
        }
        return Math.round(attack);
      }

      set attack(value) {
        this.isAttack = value;
      }
}