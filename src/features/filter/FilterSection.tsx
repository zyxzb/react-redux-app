import { ChangeEvent } from 'react';

import { Input } from '@/components/ui/input';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { setFilter, resetFilters } from './filterSlice';
import { Button } from '@/components/ui/button';

const FilterSection = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.filters);

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setFilter({ field: name as keyof typeof filters, value }));
  };

  const handleFiltersReset = () => {
    dispatch(resetFilters());
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
      <Button onClick={handleFiltersReset}>Reset filters</Button>
    </section>
  );
};

export default FilterSection;
