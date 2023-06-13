import Dog from '../db/models/dog.model';

export const getDogList = async (req, res) => {
	const {
		query: {
			limit,
			pageNumber,
			pageSize,
			attribute,
			order
		}
	} = req;
	const offset = pageNumber * pageSize;
	const queryOrder = attribute && order ? [[attribute, order]] : [['id', 'ASC']];
	try {
		const dogList = await Dog.findAll({
			limit: Number(limit) || Number(pageSize) || 10,
			offset: Number(offset) || 0,
			order: queryOrder,
			attributes: {
				exclude: ['createdAt', 'updatedAt']
			},
		});
		res.status(200).json(dogList);
	} catch (err) {
		console.log(err);
		res.status(400).json({ error: 'Bad Request' });
	}
};