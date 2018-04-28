# Async Iterators
Node.js 10 added an experimental support for asynchronously iterating over readable streams.

### Let's check it out:

First, let's assume we want to read a large csv file full of users details.

Now let's create a readable stream:
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

Run:
`npm start`

Output:
```
(node:24428) ExperimentalWarning: Readable[Symbol.asyncIterator] is an experimental feature. This feature could change at anytime
>>> finished chunk number: 0
>>> finished chunk number: 1
```
