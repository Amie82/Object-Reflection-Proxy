import Validator from '../regular_expressions';

test('testing symbols', () => {
    const validate = new Validator('lucky@%cat');
    const result = () => validate.validateUserName();

    expect(result).toThrow('Допустимы только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)');
});

test('testing correct name start ', () => {
    const validate = new Validator('55region');
    const result = () => validate.validateUserName();

    expect(result).toThrow('Имя не должно начинаться цифрами, символами подчёркивания или тире');
});

test('testing correct name end', () => {
    const validate = new Validator('amieAmie_82');
    const result = () => validate.validateUserName();

    expect(result).toThrow('Имя не должно заканчиваться цифрами, символами подчёркивания или тире');
});

test('testing name with 3 or more num', () => {
    const validate = new Validator('amie828Amie');
    const result = () => validate.validateUserName();

    expect(result).toThrow('Имя не должно содержать подряд более трёх цифр');
});