import Nav from './components/Nav';
import FilterSection from './features/filter/FilterSection';
import UsersTable from './features/users/UsersTable';

function App() {
  return (
    <div className='flex flex-col gap-4 p-2 md:p-4'>
      <Nav />
      <FilterSection />
      <UsersTable />
    </div>
  );
}

export default App;
