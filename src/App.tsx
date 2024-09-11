import ThemeSwitcher from './features/darkMode/ThemeSwitcher';
import FilterInputs from './features/filter/FilterInputs';
import UsersTable from './features/users/UsersTable';

function App() {
  return (
    <div className='p-2 md:p-4 flex flex-col gap-4'>
      <ThemeSwitcher />
      <FilterInputs />
      <UsersTable />
    </div>
  );
}

export default App;
