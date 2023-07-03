# Smokey Weed

This sample has been made using Material UI. To run:

```
yarn
yarn start
```

## Some assumptions:
- Favorites: Complete repository object is being stored in local storage, we could store just names and then use Github search api and construct query with names, but Github has a limitation on it and we can only have upto 5 `and` or `or` and there's also a byte limit on it. Hence storing whole object in local storage.
- Filtering with Language: Same limitation as Favorites apply here, hence only one language filter is applied at a time, however it can be extended.