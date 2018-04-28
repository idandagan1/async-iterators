const fs = require('fs');


async function readUsers(filePath) {

	let i = 0;
	const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

	for await (const chunk of readStream) {
		const users = chunk.split('\n').map(r => r.split(','))
		// do some proccessing with users
		console.log(`>>> finished chunk number: ${i++}`);
	}

	return;
}

readUsers('./users.csv');
