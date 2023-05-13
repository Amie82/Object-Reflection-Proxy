import ArrayBufferConverter from '../ArrayBuffer2/ArrayBufferConverter';
import getBuffer from '../ArrayBuffer2/getBuffer';

test('testing loading data to buffer', () => {
    const bufferConverter = new ArrayBufferConverter();
    const buffer = getBuffer();
    bufferConverter.load(buffer);

    expect(bufferConverter.buffer).toEqual(getBuffer());
});

test('testing to return string from buffer', () => {
    const bufferConverter = new ArrayBufferConverter();
    bufferConverter.load(getBuffer());
    expect(bufferConverter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});