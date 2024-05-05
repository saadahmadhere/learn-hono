import { Hono } from 'hono';

const app = new Hono();

app.get('/', (c) => {
	return c.json({
		message: 'hello world!',
	});
});

export default app;
