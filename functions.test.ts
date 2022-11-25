const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    
    test('shuffle the items around', () => {
        expect(shuffleArray('asdf')).toContain('asdf')
    })

    test('return an array', () => {
        expect(shuffleArray()).toBeTruthy()
    })
})