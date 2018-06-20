const relational = options => app => {
  this.relationships = {};

  const mixin = (service, path) => {
    if (!this.relationships[path]) this.relationships.path = [];
    service.relationships = relationships => {
      this.relationship[path] = [...this.relationships[path], ...relationships];

      relationships.map(relationship => {
        if (relationship.type === "oneToMany") {
          // app.service(path).hooks({
          //   after: {
          //     all: [
          //       async context => {
          //         // const foreignService = app.service(relationship.service);
          //         // const ids = context.data[relationship.localKey];
          //         // const result = foreignService.get(ids)
          //         // context.data[relationship.toKey] = result
          //         context.data.woot = true;
          //         return context;
          //       }
          //     ]
          //   }
          // });
        }
      });
    };
  };
  app.mixins.push(mixin);
};

module.exports = relational;
