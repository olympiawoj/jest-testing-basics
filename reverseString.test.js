const reverseString = require('./reverseString')

test('reverseString function exists', ()=>{
    expect(reverseString).toBeDefined()
})

test('String reverses with uppercase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
})