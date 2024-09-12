import { useEffect } from 'react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { fetchUsers } from './usersSlice';
import TableSkeleton from './TableSkeleton';

const UsersTable = () => {
  const dispatch = useAppDispatch();
  const { users, status, error } = useAppSelector((state) => state.users);
  const filters = useAppSelector((state) => state.filters);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (status === 'loading') return <TableSkeleton />;

  if (status === 'failed' || error) return <p>{error}</p>;

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filters.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filters.email.toLowerCase()) &&
      user.phone.includes(filters.phone),
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className='text-right'>Phone</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredUsers.map((user) => (
          <TableRow key={user.id}>
            <TableCell className='font-medium'>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell className='text-right'>{user.phone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter className='transition-colors duration-150'>
        <TableRow>
          <TableCell colSpan={3}>Total users</TableCell>
          <TableCell className='text-right'>{filteredUsers.length}</TableCell>
        </TableRow>
      </TableFooter>
      <TableCaption>
        A list of users from{' '}
        <a
          className='underline'
          href='https://jsonplaceholder.typicode.com/guide/'
        >
          jsonplaceholder.typicode.com
        </a>
      </TableCaption>
    </Table>
  );
};

export default UsersTable;
