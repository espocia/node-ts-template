import { createServer } from "node:http";

const server = createServer((req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.end('Hello World!\n')
});

export default server


