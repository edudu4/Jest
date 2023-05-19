const calculo = require('../media')

test('Testando a média aritmética' , () => {
    expect(calculo.media(7,4)).toBe(10)
})