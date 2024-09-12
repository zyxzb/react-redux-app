import Nav from './components/Nav';
import FilterInputs from './features/filter/FilterInputs';
import UsersTable from './features/users/UsersTable';

function App() {
  return (
    <div className='flex flex-col gap-4 p-2 md:p-4'>
      <Nav />
      <FilterInputs />
      <UsersTable />
    </div>
  );
}

export default App;
