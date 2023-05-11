import ErrorRepository from '../container_map';

const map = new ErrorRepository(1, 'HTTP response status codes');

test('testing ErrorRepository for code 101', () => {
    const result = map.translate(101);
    expect(result).toEqual('Switching Protocols');
});

test('testing ErrorRepository for code 200', () => {
    const result = map.translate(200);
    expect(result).toEqual('Try again');
});

test('testing ErrorRepository for code 410', () => {
    const result = map.translate(410);
    expect(result).toEqual('Gone');
});

test('testing ErrorRepository for code 404', () => {
    const result = map.translate(404);
    expect(result).toEqual('Not Found');
});

test('testing ErrorRepository for Unknown error', () => {
	const result = map.translate(999);
	expect(result).toBe('Unknown error');
});