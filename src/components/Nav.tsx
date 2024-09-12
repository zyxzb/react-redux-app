import ThemeSwitcher from '@/features/darkMode/ThemeSwitcher';

const Nav = () => {
  return (
    <nav>
      <div className='flex items-center justify-between gap-4 font-semibold'>
        <p>React + Redux Toolkit + TS + shadcn/ui</p>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Nav;
