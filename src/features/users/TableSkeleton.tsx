import { Skeleton } from '@/components/ui/skeleton';

const TableSkeleton = () => {
  return (
    <div className='flex flex-col gap-1'>
      <Skeleton className='h-[40px] w-full' />
      <Skeleton className='h-[32px] w-full' />
      <Skeleton className='h-[32px] w-full' />
      <Skeleton className='h-[32px] w-full' />
      <Skeleton className='h-[32px] w-full' />
      <Skeleton className='h-[32px] w-full' />
    </div>
  );
};

export default TableSkeleton;
