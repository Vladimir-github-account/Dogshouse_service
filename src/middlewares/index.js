import { validateIntegerValues } from '../utils';

export const checkIntegerValues = (req, res, next) => {
	const { weight, tail_length } = req.body;
	if (!(weight && tail_length)) {
		return res.status(400).json({ error: 'All input is required' });
	}
	if (!validateIntegerValues(weight, tail_length)) {
		return res.status(400).json({ error: 'Only positive values allowed' });
	}
	return next();
};