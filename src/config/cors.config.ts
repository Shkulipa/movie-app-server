import cors from 'cors';

/**
 * @info
 * don't use * for localhost
 * intead of add
 * origin: ['http://localhost:3000'],
 */
export default cors({
	origin: ['http://localhost:3000'],
	methods: ['PUT', 'DELETE', 'GET', 'POST', 'PATCH'],
	credentials: true,
	optionsSuccessStatus: 200
});
