import Link from 'next/link';

const Header = () => {
	return (
		<header className="p-4">
			<nav className="flex items-center justify-between">
				<div className="text-2xl font-bold text-space-blue">
					<Link href="/">RisingStack Test App</Link>
				</div>
				<ul className="flex space-x-4 text-space-blue">
					<li>
						<Link className="hover:text-purple-800" href="/">Home</Link>
					</li>
					<li>
						<Link className="hover:text-purple-800" href="/leaderboard">Leaderboard</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
