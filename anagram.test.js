const isAnagram = require('./anagram')

test('isAnagram function exists', ()=>{
    //typeof checks the type
    expect(typeof(isAnagram)).toEqual('function')
})

test('"cinema" is an anagram of "iceman"', ()=>{
    expect(isAnagram('cinema', 'iceman')).toBeTruthy()
})

test('"Dormitory" is an anagram of "dirty room###"', ()=>{
    expect(isAnagram('Dormitory', 'dirty room###')).toBeTruthy()
})


test('"Hello" is NOT an anagram of "Hello"', ()=>{
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy()
})