import Header from '../components/header';
import GambleGameContext from '../store/gamble-game-context';

const Layout = ({ children }: any) => {

	const initialContextValues = {
		name: '',
		budget: 0,
	};

	return (
		<div>
			<GambleGameContext.Provider value={initialContextValues}>
				<Header/>
				<main className="min-h-container">
					{children}
				</main>
			</GambleGameContext.Provider>
		</div>
	);
};

export default Layout;