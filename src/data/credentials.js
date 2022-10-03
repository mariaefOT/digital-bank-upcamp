const users = [{
    type: 'USER',
    username: 'jsmith@demo.io',
    password: 'Demo123!',
  }, {
    type: 'ADMIN',
    username: 'admin@demo.io',
    password: 'Demo123!',
  }];

export const getUser = (type) => {
    return users.filter(user => user.type === type)[0];
};