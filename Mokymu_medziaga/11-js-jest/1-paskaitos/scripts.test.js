const [suma, atimti, daugyba] = require('./scripts');

test('funkcija suma grazina 5', () =>{
    expect(suma(2,3)).toBe(5);
});

test('funkcija suma teisingai skaiciuoja', () =>{
    expect(suma(2,3)).not.toBe(4);
});

test('funkcija atimti su parametrais - 10 ir 8 grazina 2', () =>{
    expect(atimti(10,8)).toBe(2);
});

test('funkcija daugyba su parametrais - 10 ir 8 grazina 80', () =>{
    expect(daugyba(10,8)).toBe(80);
});

//kitas galimas variantas, senovinis

it ('test su IT reiksme', () =>{
    expect(4).toBe(4);
});