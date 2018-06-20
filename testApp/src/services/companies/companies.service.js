// Initializes the `companies` service on path `/companies`
const createService = require("feathers-memory");
const hooks = require("./companies.hooks");
const sampleUsers = require("../../../data/users");
const R = require("ramda");

module.exports = async function(app) {
  const paginate = app.get("paginate");

  const options = {
    name: "companies",
    paginate,
    relationships: {}
  };

  // Initialize our service with any options it requires
  app.use("/companies", createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service("companies");

  const employeeIds = R.pipe(
    R.groupBy(R.path(["company", "name"])),
    R.map(R.map(R.prop("id")))
  )(sampleUsers);

  const results = R.pipe(
    R.map(R.prop("company")),
    R.uniqBy(R.prop("name")),
    R.map(company => ({...company, employeeIds: employeeIds[company.name]})),
    R.map(company => service.create(company))
  )(sampleUsers);

  const entries = await Promise.all(results);
  service.hooks(hooks);
};
