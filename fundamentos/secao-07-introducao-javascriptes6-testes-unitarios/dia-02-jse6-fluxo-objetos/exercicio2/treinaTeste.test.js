const { myRemove, myFizzBuzz, decode, encode } = require("./treinaTeste");

describe("A função myRemove()", () => {
  it("Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
    const array = [1, 2, 3, 4];
    expect([1, 2, 4]).toEqual(myRemove(array, 3));
  });

  it("Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    const array = [1, 2, 3, 4];
    expect(myRemove(array, 3)).not.toBe(array);
  });

  it("Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado", () => {
    const array = [1, 2, 3, 4];
    expect(array).toEqual(myRemove(array, 5));
  });
});

describe("A função myFizzBuzz()", () => {
  it("Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado", () => {
    const num = 15;
    expect(myFizzBuzz(num)).toBe("fizzbuzz");
    console.log(myFizzBuzz(num));
  });

  it("Execute a função myFizzBuzz(num), sendo num um número divisível por 3, e verifique se o retorno é o esperado", () => {
    const num = 9;
    expect(myFizzBuzz(num)).toBe("fizz");
    console.log(myFizzBuzz(num));
  });

  it("Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado", () => {
    const num = 10;
    expect(myFizzBuzz(num)).toBe("buzz");
    console.log(myFizzBuzz(num));
  });

  it("Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado", () => {
    const num = 13;
    expect(myFizzBuzz(num)).toBe(13);
    console.log(myFizzBuzz(num));
  });

  it("Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado", () => {
    const num = "chama";
    expect(myFizzBuzz(num)).toBe(false);
    console.log(myFizzBuzz(num));
  });
});

describe("A funções decode() e encode()", () => {
  it("a função encode é definida", () => {
    expect(encode).toBeDefined();
  });

  it("Teste se encode e decode são funções", () => {
    const string = "matocou";
    const stringDecoded = "m1t4c45";
    expect(encode(string)).toBe("m1t4c45");
    expect(decode(stringDecoded)).toBe("matocou");
    console.log(encode(string));
  });

  it("Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente", () => {
    const string = "aeiou";
    expect(encode(string)).toBe("12345");
    console.log(encode(string));
  });

  it("Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente", () => {
    const string = "12345";
    expect(decode(string)).toBe("aeiou");
    console.log(decode(string));
  });

  it("Teste se as demais letras/números não são convertidos para cada caso", () => {
    const string = "bcdfghj";
    const stringDecoded = "67890";
    expect(encode(string)).toBe("bcdfghj");
    expect(decode(stringDecoded)).toBe("67890");
    console.log(encode(string));
  });

  it("Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro", () => {
    const string = "Meu nome é matias e tenho 29 anos";
    expect(string.length).toEqual(encode(string).length);
    expect(string.length).toBe(decode(string).length);
    console.log(encode(string).length);
  });
});
