export default class Team {
  constructor() {
    this.members = [
      {
        name: 'Bob',
        type: 'Bowman',
        health: 50,
        level: 1,
        attack: 40,
        defence: 10,
      },
      {
        name: 'Carl',
        type: 'Cavalry',
        health: 80,
        level: 2,
        attack: 75,
        defence: 25,
      },
      {
        name: 'Maggie',
        type: 'Mage',
        health: 25,
        level: 3,
        attack: 120,
        defence: 5,
      },
    ];
  }

  * [Symbol.iterator]() {
    for (let i = 0; i < this.members.length; i += 1) {
      yield this.members[i];
    }
  }
}
