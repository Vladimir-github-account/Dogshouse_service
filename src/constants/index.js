export const CORS_OPTIONS = {
	origin: true,
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	credentials: true,
	maxAge: 3600
};

export const POSITIVE_INTEGERS_PATTERN = /^[1-9]+[0-9]*$/;