import Team from '../container_set';

test('testing add method', () => {
    const team = new Team();
    team.add('javascript');
    expect(team.toArray()).toEqual(['javascript']);
});

test('testing Error add method', () => {
    const team = new Team();
    team.add('javascript');
    expect(() => team.add('javascript')).toThrow('Такой персонаж уже существует');
});

test('testing addAll method', () => {
    const team = new Team();
    team.addAll('javascript', 'javascript', 'java', 'phyton');
    expect(team.toArray()).toEqual(['javascript', 'java', 'phyton']);
});