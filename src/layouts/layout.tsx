import Header from '../components/header';

const Layout = ({ children }: any) => {
  return (
    <div>
      <Header />
      <main className='min-h-container'>
        {children}
      </main>
    </div>
  );
};

export default Layout;