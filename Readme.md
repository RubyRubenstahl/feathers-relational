app.configure('feathers-relational');


## oneToOne

```JS
oneToOne(localKey, toKey, serviceName, options)
```
Map a single item from another service.

#### Parameters

*localKey* - Name of the key that contains the ids to populate from.

*toKey* - The name of the key to populate into.

*serviceName* - Name of the service to populate from.

*options* - An object with additional options.

### How it works
When a oneToOne relationship is triggered, a listener is registered. When an item on the service is deleted

#### Options
```JS
cont options = {
    include: [],       // Array of keys to include. If empty, all keys will be sent
    exclude: [],      // Array of keys to exclude
    maxDepth: 2,      // Maximum depth of foreign keys to join
    foreignKey: '_id' // The foreign key if it's anything other than the id
}
```

## oneToMany

### Usage
```JS
oneToMany(localKey, toKey, serviceName, options)
```

#### Parameters

*localKey* - Name of the key that contains an array of ids to populate from.

*toKey* - The name of the key to populate into.

*serviceName* - Name of the service to populate from.

*options* - An object with additional options.


#### Options
```JS
cont options = {
    include: [],       // Array of keys to include. If empty, all keys will be sent
    exclude: [],      // Array of keys to exclude
    maxDepth: 2,      // Maximum depth of foreign keys to join
    foreignKey: '_id' // The foreign key if it's anything other than the id
}
```


