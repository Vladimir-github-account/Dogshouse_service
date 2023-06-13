import Dog from '../db/models/dog.model';

export const createDog = async (req, res) => {
	const {
		body: {
			name,
			color,
			tail_length,
			weight
		}
	} = req;
	try {
		if (!(name && color && tail_length && tail_length)) {
			return res.status(400).json({ error: 'All input is required' });
		}
		const oldDog = await Dog.findOne({ where: { name } });
		if (oldDog !== null) {
			return res.status(404).json({ error: 'Dog with this name already exist' });
		}
		const dog = await Dog.create({
			name,
			color,
			tail_length,
			weight
		});
		res.status(201).json(dog.get());
	} catch (err) {
		console.log(err);
		res.status(400).json({ error: 'Bad Request' });
	}
};