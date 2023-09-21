import { memo, useContext, useState } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { Link } from 'react-router-dom';

import StudentListComponent from '../student/StudentListComponent';
import TransparentSpinner from '../../shared/components/spinner/TransparentSpinner';

import { getStudents } from '../student/studentService';

import { StateContext } from '../../App';

export const PAGE_SIZE = 8;

function HomeComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const queryClient = useQueryClient();
  const { adminState } = useContext(StateContext);
  const [isAdmin] = adminState;

  const { data, isLoading } = useQuery(['getStudents', { limit: PAGE_SIZE, offset: (currentPage - 1) * PAGE_SIZE, searchText }], getStudents);

  const handleSearch = () => {
    queryClient.invalidateQueries(['getStudents', { limit: PAGE_SIZE, offset: (currentPage - 1) * PAGE_SIZE, searchText }]);
  };

  const handlePageClick = (event: { selected: number }) => {
    const newPage = event.selected + 1;
    setCurrentPage(newPage);
    queryClient.invalidateQueries(['getStudents', { limit: PAGE_SIZE, offset: (newPage - 1) * PAGE_SIZE, searchText }]);
  };

  return (
    <>
      {isLoading && <TransparentSpinner />}
      <div className='grid grid-flow-row-dense grid-cols-5 my-5'>
        <div className={isAdmin ? 'col-span-4' : 'col-span-5'}>
          <div className='text-center'>
            <div className='flex justify-center items-center'>
              <input
                onBlur={(event: React.ChangeEvent<HTMLInputElement>) => setSearchText(event.target.value)}
                type='text'
                placeholder='Search by student id, name, department, email, phone'
                className='input input-bordered w-full'
              />
              <button onClick={() => handleSearch()} className='btn btn-square w-14'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isAdmin && (
          <div className='text-end'>
            <Link to={'/students/add'}>
              <button className='btn btn-dark bg-gray-800 text-white hover:bg-gray-900 hover:text-white w-4/5'>Add Student</button>
            </Link>
          </div>
        )}
      </div>
      <StudentListComponent showAdminActionButton={isAdmin} handlePageClick={handlePageClick} count={data?.data?.count ?? 0} students={data?.data?.students ?? []} />
    </>
  );
}

export default memo(HomeComponent);
