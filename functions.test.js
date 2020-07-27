const functions = require('./functions')

// 1st arg: description - anything we want
// 2nd arg: function
test('Adds 2 + 2 to equal 4', ()=> {
    expect(functions.add(2, 2)).toBe(4)
})

test('Adds 2 + 2 to NOT equal 5', ()=> {
    expect(functions.add(2, 2)).not.toBe(5)
})


// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only undefined
// toBeUndefined matches only undefined
// toBeDefuned is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches everything that an if statement treats as false

test('Should be null', ()=> {
    expect(functions.isNull()).toBeNull()
})

test('Should be falsy', () => {
    expect(functions.checkValue(2)).toBeFalsy()
})
