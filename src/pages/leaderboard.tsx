import Layout from '../layouts/layout'
import { useEffect, useState } from 'react';
import { User } from '../models/user.interface';
import '../app/globals.css';

export default function Leaderboard() {

	const [leaderboard, setLeaderboard] = useState<User[]>();

	useEffect(() => {
		fetch('/api/leaderboard')
			.then((response) => response.json())
			.then((users) => {
				setLeaderboard(users);
			});
	}, []);

	return (
		<Layout>
			<div className="flex justify-center items-center mt-16">
				<div className="max-w-md rounded-lg p-4 bg-white min-h-container backdrop-blur-2xl shadow-lg">
					<h2 className="text-space-blue font-body-bold text-2xl mb-4 text-center">Leaderboard</h2>
					<table className="w-full border-collapse">
						<thead>
						<tr className="bg-space-blue text-white">
							<th className="px-4 py-2 text-left">Name</th>
							<th className="px-4 py-2 text-left">Budget</th>
						</tr>
						</thead>
						<tbody>
						{leaderboard?.map((item, index) => (
							<tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
								<td className="px-4 py-2">{item.name}</td>
								<td className="px-4 py-2">${item.budget}</td>
							</tr>
						))}
						</tbody>
					</table>
				</div>
			</div>
		</Layout>
	)
}
