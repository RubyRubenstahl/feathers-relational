// Initializes the `users` service on path `/users`
const createService = require('feathers-memory');
const hooks = require('./users.hooks');
const sampleUsers = require('../../../data/users');
const R = require('ramda');

module.exports = async function (app) {

  const paginate = app.get('paginate');

  const options = {
    name: 'users',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/users', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('users');

  const results = R.pipe(
    R.map(R.omit(['company'])),
    R.map(user => service.create(user)),

  )(sampleUsers);

  const entries = await Promise.all(results);

  service.hooks(hooks);
};
