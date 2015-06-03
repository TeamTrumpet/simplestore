# Simplestore

A simple restful
[CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete) interface
to a mongo database.

## Documentation

See [docs/api.md](docs/api.md)
for the API documentation in [API Blueprint](https://apiblueprint.org/) format.

To render the documentation in your web browser, clone the repository and run
the following:

```
# install
sudo npm install -g aglio

# run
aglio -i docs/api.md -s
```

And browse to http://localhost:3000 to view the documentation.
