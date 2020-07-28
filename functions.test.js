const functions = require('./functions')

// 1st arg: description - anything we want
// 2nd arg: function

// toBe
test('Adds 2 + 2 to equal 4', ()=> {
    expect(functions.add(2, 2)).toBe(4)
})

// not
test('Adds 2 + 2 to NOT equal 5', ()=> {
    expect(functions.add(2, 2)).not.toBe(5)
})


// CHECK FOR TRUTHY & FALSY VALUES
// toBeNull matches only undefined
// toBeUndefined matches only undefined
// toBeDefuned is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches everything that an if statement treats as false

// toBeNull
test('Should be null', ()=> {
    expect(functions.isNull()).toBeNull()
})

// toBeFalsy 
test('Should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy()
})

// toEqual
test('Should be falsy', () => {
    expect(functions.createUser()).toEqual({
        firstName: 'Brad',
        lastName: 'Traversy'
    })
})

// Less than and greater than
test('Should be under 1600', ()=> {
    const load1 = 800;
    const load2  = 800
    expect(load1 + load2).toBeLessThanOrEqual(1600);
})

// Regex
test('There is no I in team', ()=>{
    expect('team').not.toMatch(/I/i);
})

// Arrays
test('Admin should be in usernames', ()=> {
    usernames = ['john', 'karen'];
    expect(usernames).toContain('admin')
})