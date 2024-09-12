import { ChangeEvent } from 'react';

import { Input } from '@/components/ui/input';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setFilter } from './filterSlice';

const FilterInputs = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ field: name as keyof typeof filters, value }));
  };

  return (
    <section className='flex flex-col gap-4 sm:flex-row'>
      {Object.keys(filters).map((filterKey) => (
        <Input
          key={filterKey}
          name={filterKey}
          value={filters[filterKey as keyof typeof filters]}
          onChange={handleFilterChange}
          placeholder={`Filter by ${filterKey}`}
        />
      ))}
    </section>
  );
};

export default FilterInputs;
