const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = { firstName: 'MAK' };
    user['lastName'] = 'STYLE 119';
    return user
  }
}

module.exports = functions;