const numeroAleatorioFake = 0.123456789
const gerarNumeroAleatorio = () => Math.random()
beforeEach(()=> {
    jest.spyOn(global.Math, 'random').mockReturnValue(numeroAleatorioFake)
})

test ('Retorna um valor aleatório' , () => {
    console.log('NÚMERO FAKE: ', numeroAleatorioFake)
    console.log('NÚMERO GERADO NO TESTE: ', gerarNumeroAleatorio())
    expect(gerarNumeroAleatorio()).toBe(numeroAleatorioFake)
})

afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore()
})
console.log('NÚMERO GERADO DEPOIS DO TESTE: ', gerarNumeroAleatorio())