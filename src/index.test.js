import {sum, otherSum} from './index'

test('adds of 1 and 2 is 3', () => {
    const value = sum(1,2)
    expect(value).toBe(3)
});

test('integration test using sum ans should b 7',()=>{
    expect(otherSum(3,4)).toBe('$7')
})
