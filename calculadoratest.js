const calculo = require('./calculadora')

describe('Funções Matemáticas', () => {
    test('10 + 20 = 30', () => {
        expect(calculo.soma(10,20)).toBe(30)
    })
    test('1 * 0 = 0', () => {
        expect(calculo.multiplicar(1,0)).toEqual(0)
    })
    test('2 - 5 <> 3', () => {
        expect(calculo.subtrair(2,5)).not.toBe(3)
    })
    test('5 / 3 ~ 1.7', () => {
        expect(calculo.dividir(5,3)).toBeCloseTo(1.7, 1)
    })
})