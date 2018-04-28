# Async Iterators
In Node.js they added an experimental support for asynchronously iterating over readable streams.

### Let's check it out:
run
`npm start`

First, let's create a readable stream:
```js
const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });
```

Then, we can iterate over each chunk:
```js
for await (const chunk of readStream) {
    const users = chunk.split('\n').map(r => r.split(','))
    // do some proccessing with users
    console.log(`>>> finished chunk number: ${i++}`);
}
```

Output:
```
(node:24428) ExperimentalWarning: Readable[Symbol.asyncIterator] is an experimental feature. This feature could change at anytime
>>> finished chunk number: 0
>>> finished chunk number: 1
```