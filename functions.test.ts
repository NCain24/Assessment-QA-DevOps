const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    
    test('shuffle the items around', () => {
        expect(shuffleArray(['asdf', 'fdsa', 'afsd'])).toMatch(/asdf|fdsa|afsd/)
    })

    test('return an array', () => {
        expect(shuffleArray()).toBeTruthy()
    })
})