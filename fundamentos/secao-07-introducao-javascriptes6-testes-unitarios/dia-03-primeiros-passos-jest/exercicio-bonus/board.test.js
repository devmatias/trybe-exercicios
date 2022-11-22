const { searchEmployee, professionalBoard } = require('./board');

describe('testar a função searchEmployee', () => {
    it('searchEmployee esta definida?', () => {
        expect(searchEmployee('1256-4', 'firstName')).toBeDefined();
    })

    it('searchEmployee é uma função', () => {
        expect(typeof(searchEmployee)).toBe('function');
    })

    it('searchEmployee entrega error quando não existe o id', () => {
        expect(() => {searchEmployee('9999-4', 'firstName')}).toThrow(new Error('ID não identificada'));
    })

    it('searchEmployee entrega error quando não existe o detail passado', () => {
        expect(() => {searchEmployee('4678-2', 'totoca')}).toThrow(new Error('Informação indisponível'));
    })

    it("searchEmployee entrega o detail 'firstName' passado", () => {
        expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
    })

    it("searchEmployee entrega o detail 'lastName' passado", () => {
        expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
    })

    it("searchEmployee entrega o detail 'specialities' passado", () => {
        const specialities = ["Hooks", "Context API", "Tailwind CSS"];
        expect(searchEmployee('1256-4', 'specialities')).toEqual(specialities);
    })
})

describe('testar o objeto professionalBoard', () => {
    it('professionalBoard esta definida?', () => {
        expect(professionalBoard).toBeDefined();
    })

    it('professionalBoard é um array?', () => {
        expect(Array.isArray(professionalBoard)).toBeTruthy();
    })

    it('professionalBoard items contém um objeto com id?', () => {
        for (let object of professionalBoard) {
            expect(!object.id).toBeFalsy();
        }
    })

    it('professionalBoard items contém o id repetido?', () => {
        let result = true;
        for (let index = 0; index < professionalBoard.length; index += 1) {
            let cont = 0
            for (let index2 = 0; index2 < professionalBoard.length; index2 += 1) {
                if(professionalBoard[index].id === professionalBoard[index2].id) cont += 1;
                if (cont > 1) {
                    result = false;
                    break;
                }
            }
        }
        expect(result).toBeTruthy();
    })
});