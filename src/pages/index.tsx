import Layout from '../layouts/layout';
import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import { User } from '../models/user.interface';
import GambleGameContext from '../store/gamble-game-context';
import '../app/globals.css';

export default function Home({ children }: any) {
	const [username, setUsername] = useState<User>();
	const router = useRouter();

	const ctx = useContext(GambleGameContext);

	const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername({ name: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(username)
		})
			.then((response) => response.json())
			.then(() => {
				router.push(`/game?user=${username?.name}`);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	return (
		<Layout>
			<div className="flex justify-center items-center min-h-container mt-32">
				<div className="max-w-md rounded-lg p-4 bg-white backdrop-blur-2xl">
					<h5 className="text-space-blue font-body-bold text-center pb-6">Welcome to the Gamble Game</h5>
					<p className="text-space-blue mb-4">
						This is a simple gambling game where you can test your luck.
						Enter your username below and click "Enter the game" to get started!
						If you enter an already existing username then you will continue the current state of
						that user. Good luck!
					</p>
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							className="w-full p-2 border rounded-md"
							onChange={handleUsernameChange}
						/>
						<button
							type="submit"
							className="w-full mt-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
						>
							Enter the game
						</button>
					</form>
				</div>
			</div>
		</Layout>
	);
};
