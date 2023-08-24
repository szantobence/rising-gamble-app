import clientPromise from '../../../lib/mongodb';

export default async (req: any, res: any) => {
	try {
		const client = await clientPromise;
		const db = client.db('gamble');
		const collection = db.collection('users');

		if (req.method === 'POST') {

			const filter = { name: req.body?.name };
			const update = {
				$set: {
					budget: req.body?.budget,
				},
			};

			const result = await collection.updateOne(filter, update);

			res.status(201).json(result);
		}
		else {
			res.status(405).end();
		}
	}
	catch (e) {
		console.error(e);
	}
};