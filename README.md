```
npm install
node server.js
```

Example query:

```
query ExampleQuery {
  hello {
    ... on Unit {
      age
    }
  }
}
```
