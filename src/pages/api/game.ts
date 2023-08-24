import clientPromise from '../../../lib/mongodb';

export default async (req: any, res: any) => {
	try {
		const client = await clientPromise;
		const db = client.db('gamble');

		if (req.method === 'GET') {
			const scores = await db
				.collection('users')
				.find({ name: req.query.user })
				.toArray();

			res.status(201).json(scores);
		}
		else {
			res.status(405).end();
		}
	}
	catch (e) {
		console.error(e);
	}
};