import Daemon from '../ArrayBuffer1/Daemon';
import Magician from '../ArrayBuffer1/Magician';

test('attack + stoned', () => {
    const daemon = new Daemon('Java');
    daemon.stoned = true;
    daemon.attack = 100;
    daemon.distance = 2;
    expect(daemon.attack).toBe(85);
  });

  test('attack without stoned', () => {
    const magician = new Magician('Phyton');
    magician.stoned = false;
    magician.attack = 200;
    magician.distance = 2;
    expect(magician.attack).toBe(180);
  });