const { sum, info, printMessage } = require("./myTests");

describe("Testar a função sum", () => {
  it("Teste se o retorno de sum(4, 5) é 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  it("Teste se o retorno de sum(0, 0) é 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  it("Teste se a função sum lança um erro quando os parâmetros são number 4 e string '5'", () => {
    expect(() => {
      sum(4, "5");
    }).toThrow();
  });

  it("Teste se a função sum lança um erro quando os parâmetros são number 4 e string '5'", () => {
    expect(() => {
      sum(4, "5");
    }).toThrow(new Error("parameters must be numbers"));
  });
});

describe("Testar a função printMessage e o objeto info", () => {
  it("teste objeto info", () => {
    expect(info).toHaveProperty("personagem");
  });
  it("teste função printMessage", () => {
    expect(printMessage(info)).toMatch("Boas vindas,");
    expect(printMessage(info)).toMatch(info.personagem);
  });
  it("teste erro para parametros que não sejam objetos printMessage", () => {
    expect(() => { printMessage('totoca')} ).toThrow(new Error('parâmetro inválido, deve ser um objeto e possuir propriedade personagem'));
  });

  it("teste erro para objeto sem personagem printMessage", () => {
    expect(() => { printMessage({ discord: 'totoca'})} ).toThrow(new Error('parâmetro inválido, deve ser um objeto e possuir propriedade personagem'));
  });

});
