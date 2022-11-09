const functions = require('./functions');

test('Add 2 + 2 to equal to 4', () => {
  expect(functions.add(2, 2)).toBe(4)
})

test('Add 2 + 2 to not equal 4', () => {
  expect(functions.add(2, 2)).not.toBe(5)
})

/**
 * CHECK FOR TRUTHY & FALSY VALUE
 * ToBeNull matches only null
 * ToBeUndefined matches only undefined
 * ToBeDefined is the opposite of ToBeUndefined
 * ToBeTruthy matches anything that an if statement treats as true
 * ToBeFalsy matches anything that an if statement treats as false
 */

test('Should be null', () => {
  expect(functions.isNull()).toBeNull()
})

test('Should be falsy', () => {
  expect(functions.checkValue(null)).toBeFalsy()
})

test('user should be MAK STYLE 119 Object', () => {
  expect(functions.createUser()).toEqual({firstName: 'MAK', lastName: 'STYLE 119'})
})

test('user should be MAK STYLE 119 Object', () => {
  expect(functions.createUser()).toStrictEqual({firstName: 'MAK', lastName: 'STYLE 119'})
})

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600)
})

// Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('There is no I in team', () => {
  expect('teamI').toMatch(/I/)
})

// Arrays
test('Admin should be in usernames', () => {
  usernames = ['mak', 'moiz', 'admin'];
  expect(usernames).toContain('admin')
})

// Working with async data
// Promise
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham')
    })
})

// Async Await
test('2 User fetched name should be Leanne Graham', async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual('Leanne Graham')
})