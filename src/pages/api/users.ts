import { Collection } from 'mongodb';
import clientPromise from '../../../lib/mongodb';
import { User } from '../../models/user.interface';

export default async (req: any, res: any) => {
	try {
		const client = await clientPromise;
		const db = client.db('gamble');
		const collection = db.collection('users');

		if (req.method === 'POST') {
			const userInput: User = {
				name: req.body?.name,
				budget: 100
			};

			const user = await db
				.collection('users')
				.find({ name: userInput?.name })
				.toArray();

			if (!user.length) {
				insertNewUser(collection, userInput);
			}

			res.status(201).json(user);
		}
		else {
			res.status(405).end();
		}
	}
	catch (e) {
		console.error(e);
	}
};

const insertNewUser = (collection: Collection, userData: User) => {
	collection.insertOne(userData)
		.then((result) => {
			console.log('User inserted successfully:', result.insertedId);
		})
		.catch((err) => {
			console.error('Error inserting user:', err);
		})
}