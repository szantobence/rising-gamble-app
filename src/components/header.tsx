import Link from 'next/link';

const Header = () => {
  return (
    <header className="p-4">
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold text-space-blue">
            <Link href="/">RisingStack Test App</Link>
          </div>
          <ul className="flex space-x-4 text-space-blue">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/game">Game</Link>
            </li>
            <li>
              <Link href="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
